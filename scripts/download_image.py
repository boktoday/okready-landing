import requests
url = 'http://hailuo-image-algeng-data-us.oss-us-east-1.aliyuncs.com/image_inference_output%2Ftalkie%2Fprod%2Fimg%2F2026-04-30%2F5948799a-36d3-499d-8d4a-01e77543cd69_aigc.jpeg?Expires=1777623418&OSSAccessKeyId=LTAI5tRDTcyEYLLuBEpJRwCi&Signature=GsdnQk7q9dTVnpyjA0G4elZZLFM%3D'
r = requests.get(url, timeout=30)
path = 'public/images/australia-family.jpg'
with open(path, 'wb') as f:
    f.write(r.content)
print(f'Saved {len(r.content)} bytes to {path}')
