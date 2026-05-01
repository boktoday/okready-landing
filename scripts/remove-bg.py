"""Remove dark background from logo image to make it transparent."""
from PIL import Image
import numpy as np

path = r"C:\Users\insig\.copaw\workspaces\okready-landing\public\images\ok-ready-logo.png"
out_path = r"C:\Users\insig\.copaw\workspaces\okready-landing\public\images\ok-ready-logo.png"

img = Image.open(path).convert("RGBA")
arr = np.array(img)

# Background is very dark (R~1, G~6, B~9). 
# Threshold: pixels within 30 of this color become transparent
bg_r, bg_g, bg_b = 1, 6, 9
threshold = 35

# Calculate distance from background color for each pixel
dist = np.sqrt(
    (arr[:, :, 0].astype(float) - bg_r) ** 2 +
    (arr[:, :, 1].astype(float) - bg_g) ** 2 +
    (arr[:, :, 2].astype(float) - bg_b) ** 2
)

# Create alpha: 0 for background, 255 for foreground
# Smooth transition near threshold for anti-aliasing
alpha = np.clip((dist - threshold) * 8, 0, 255).astype(np.uint8)

# Apply alpha
arr[:, :, 3] = alpha

# Save
result = Image.fromarray(arr, "RGBA")
result.save(out_path, "PNG")
print(f"Saved: {out_path}")

# Verify
verify = Image.open(out_path)
print(f"Size: {verify.width}x{verify.height}, Mode: {verify.mode}")

# Check corners are now transparent
verify_arr = np.array(verify)
print(f"Top-left alpha: {verify_arr[0, 0, 3]}")
print(f"Top-right alpha: {verify_arr[0, -1, 3]}")
print(f"Bottom-left alpha: {verify_arr[-1, 0, 3]}")
print(f"Bottom-right alpha: {verify_arr[-1, -1, 3]}")
