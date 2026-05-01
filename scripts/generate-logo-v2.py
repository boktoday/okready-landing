#!/usr/bin/env python3
"""Regenerate logo-shield-checkmark with tighter framing."""
import json, os, base64, sys, requests

API_KEY = os.environ.get("MINIMAX_API_KEY", "").strip()
API_HOST = os.environ.get("MINIMAX_API_HOST", "https://api.minimax.io").strip()

prompts = [
    {
        "prompt": "Professional brand logo symbol, tightly cropped. A bold thick checkmark symbol integrated inside a simple shield shape, filling the entire frame edge to edge with minimal surrounding background. Modern minimal vector style, warm amber and emerald green gradient on dark background. Clean geometric design, no text. High contrast, premium brand identity icon designed to look good small in a website header.",
        "name": "logo-shield-checkmark-v2"
    },
]

def generate_image(prompt_data, output_dir):
    prompt = prompt_data["prompt"]
    name = prompt_data["name"]
    
    url = f"{API_HOST}/v1/image_generation"
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
    }
    payload = {
        "model": "image-01",
        "prompt": prompt,
        "n": 1,
        "response_format": "base64",
        "aspect_ratio": "1:1",
    }

    print(f"  Generating: {name}...", flush=True)
    resp = requests.post(url, headers=headers, json=payload, timeout=120)
    try:
        data = resp.json()
    except Exception:
        print(f"  FAILED to parse JSON: {resp.text[:500]}")
        return None
    
    base_resp = data.get("base_resp", {})
    if base_resp.get("status_code") != 0:
        print(f"  API Error: {base_resp.get('status_msg', 'unknown')}")
        return None
    
    img_data = data.get("data", {})
    if isinstance(img_data, dict):
        img_b64_list = img_data.get("image_base64", [])
        img_url = img_data.get("url", "")
        
        if img_b64_list and isinstance(img_b64_list, list):
            img_b64 = img_b64_list[0]
            img_bytes = base64.b64decode(img_b64)
            out_path = os.path.join(output_dir, f"{name}.png")
            with open(out_path, "wb") as f:
                f.write(img_bytes)
            print(f"  Saved: {out_path} ({os.path.getsize(out_path)} bytes)")
            return out_path
        elif img_url:
            print(f"  URL: {img_url}")
            img_resp = requests.get(img_url, timeout=30)
            out_path = os.path.join(output_dir, f"{name}.png")
            with open(out_path, "wb") as f:
                f.write(img_resp.content)
            print(f"  Downloaded: {out_path} ({os.path.getsize(out_path)} bytes)")
            return out_path
        else:
            print(f"  No image data: {str(img_data)[:300]}")
            return None
    else:
        print(f"  Unexpected data type: {type(img_data)} = {str(img_data)[:200]}")
        return None

def main():
    output_dir = os.path.join(os.getcwd(), "minimax-output")
    os.makedirs(output_dir, exist_ok=True)

    if not API_KEY:
        print("Error: MINIMAX_API_KEY not set")
        sys.exit(1)

    print(f"Using API: {API_HOST}")
    print(f"Generating {len(prompts)} images...\n")
    
    results = []
    for p in prompts:
        path = generate_image(p, output_dir)
        if path:
            results.append(path)
        print()
    
    print(f"Done! {len(results)}/{len(prompts)} images generated.")
    for r in results:
        print(f"  {r}")

if __name__ == "__main__":
    main()
