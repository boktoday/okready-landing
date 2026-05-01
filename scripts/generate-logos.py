#!/usr/bin/env python3
"""Generate logo concept images via MiniMax image-01 API."""
import json, os, base64, sys, requests

API_KEY = os.environ.get("MINIMAX_API_KEY", "").strip()
API_HOST = os.environ.get("MINIMAX_API_HOST", "https://api.minimax.io").strip()

prompts = [
    {
        "prompt": "Professional brand logo design. A bold thick checkmark symbol integrated inside a simple shield shape, modern minimal style, warm amber and emerald green gradient on dark background. Clean vector-style graphic, no text. High contrast, geometric, premium brand identity design.",
        "name": "logo-shield-checkmark"
    },
    {
        "prompt": "Professional brand logo design. A circular arrow or infinity-like cycle symbol representing resilience and continuous improvement, simple flowing lines, warm amber tones on dark background. Modern minimal vector style, geometric, clean. No text. Premium brand identity.",
        "name": "logo-cycle-arrow"
    },
    {
        "prompt": "Professional brand logo design. A simple stylized mountain peak with a rising sun behind it, representing journey and growth. Minimal geometric vector style, warm amber and earth tones on dark background. Clean lines, no text. Premium brand identity symbol.",
        "name": "logo-mountain-sun"
    },
    {
        "prompt": "Professional brand logo design. A simplified tree silhouette with visible deep root system below, representing grounding and resilience. Minimal vector style, warm amber and emerald green tones on dark background. Clean geometric design, no text. Premium brand identity symbol.",
        "name": "logo-tree-roots"
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
    print(f"Generating {len(prompts)} logo concepts...\n")
    
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
