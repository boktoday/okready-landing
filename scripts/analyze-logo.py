"""Analyze logo image to determine background color, then make it transparent."""
from PIL import Image
import numpy as np

path = r"C:\Users\insig\.copaw\workspaces\okready-landing\public\images\ok-ready-logo.png"
img = Image.open(path).convert("RGBA")
arr = np.array(img)

# Sample corner pixels to detect background color
corners = [
    arr[0, 0],        # top-left
    arr[0, -1],       # top-right
    arr[-1, 0],       # bottom-left
    arr[-1, -1],      # bottom-right
    arr[0, img.width // 2],  # top-center
]

print("Corner colors (RGBA):")
for i, c in enumerate(corners):
    print(f"  Corner {i}: R={c[0]}, G={c[1]}, B={c[2]}, A={c[3]}")

# Find the most common color in the border pixels
border_pixels = np.vstack([
    arr[0, :],       # top row
    arr[-1, :],      # bottom row
    arr[:, 0],       # left column
    arr[:, -1],      # right column
])

# Average border color
avg_color = border_pixels.mean(axis=0)
print(f"\nAverage border color: R={avg_color[0]:.0f}, G={avg_color[1]:.0f}, B={avg_color[2]:.0f}, A={avg_color[3]:.0f}")

# Check if it's mostly white, dark, or colored
brightness = (avg_color[0] + avg_color[1] + avg_color[2]) / 3
print(f"Average border brightness: {brightness:.0f}/255")

# Check image dimensions
print(f"\nImage dimensions: {img.width}x{img.height}")
print(f"Total pixels: {img.width * img.height}")

# Print unique colors (sample)
unique_colors = len(np.unique(arr[:, :, :3].reshape(-1, 3), axis=0))
print(f"Unique colors: {unique_colors}")
