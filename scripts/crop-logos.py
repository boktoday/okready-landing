"""Auto-crop logo images to remove excess background padding."""
from PIL import Image
import numpy as np
import os

def autocrop(path, output_path, padding=5):
    img = Image.open(path).convert("RGBA")
    arr = np.array(img)
    
    # Find non-black/non-transparent pixels
    # Alpha channel or brightness
    if arr.shape[2] == 4:
        alpha = arr[:, :, 3]
        mask = alpha > 20
    else:
        gray = np.mean(arr[:, :, :3], axis=2)
        mask = gray < 250  # not near-white
    
    coords = np.column_stack(np.where(mask))
    if len(coords) == 0:
        img.save(output_path)
        return
    
    y0, x0 = coords.min(axis=0)
    y1, x1 = coords.max(axis=0) + 1
    
    # Add padding
    x0 = max(0, x0 - padding)
    y0 = max(0, y0 - padding)
    x1 = min(img.width, x1 + padding)
    y1 = min(img.height, y1 + padding)
    
    cropped = img.crop((x0, y0, x1, y1))
    
    # Make square by adding equal padding on both sides
    size = max(cropped.width, cropped.height)
    square = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    offset_x = (size - cropped.width) // 2
    offset_y = (size - cropped.height) // 2
    square.paste(cropped, (offset_x, offset_y))
    
    square.save(output_path)
    print(f"  Cropped: {os.path.basename(path)} -> {os.path.basename(output_path)} ({size}x{size})")

base = r"C:\Users\insig\.copaw\workspaces\okready-landing\minimax-output"
out_dir = r"C:\Users\insig\.copaw\workspaces\okready-landing\public\images"
os.makedirs(out_dir, exist_ok=True)

for f in ["logo-shield-checkmark.png", "logo-shield-checkmark-v2.png"]:
    src = os.path.join(base, f)
    if os.path.exists(src):
        name = f.replace(".png", "-cropped.png")
        dst = os.path.join(out_dir, name)
        autocrop(src, dst)
