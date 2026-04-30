import requests, json, os, base64

api_key = os.environ.get('MINIMAX_API_KEY', '')
url = 'https://api.minimax.io/v1/image_generation'
headers = {
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json'
}
payload = {
    'model': 'image-01',
    'prompt': 'A stylized illustration of Australia map outline with a happy Australian family of four standing together inside the map outline, warm sunset amber and gold tones, dark earth tones background, modern self-sufficiency and resilience theme, digital illustration style',
    'n': 1,
    'aspect_ratio': '1:1'
}
r = requests.post(url, json=payload, headers=headers, timeout=60)
print('Status:', r.status_code)
data = r.json()
print(json.dumps(data, indent=2)[:2000])
if 'data' in data and 'image_base64' in data['data']:
    imgs = data['data']['image_base64']
    for i, b64 in enumerate(imgs):
        path = f'public/images/australia-family-{i}.jpg'
        with open(path, 'wb') as f:
            f.write(base64.b64decode(b64))
        print(f'Saved {path}')
else:
    print('No image data received')
