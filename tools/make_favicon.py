from PIL import Image, ImageDraw

W, H = 512, 512
img = Image.new('RGBA', (W, H), (0, 0, 0, 255))
d = ImageDraw.Draw(img)

# Core palette from the provided logo
pink = (244, 167, 160, 255)
peach = (246, 192, 117, 255)
orange = (240, 129, 82, 255)
purple = (155, 92, 199, 255)
light = (245, 245, 245, 255)
black = (0, 0, 0, 255)

# Large sweeping outer shapes
# Left arc hand-like pink segment
left_outer = [
    (150, 208), (185, 140), (255, 116), (316, 140), (375, 196),
    (420, 258), (398, 338), (336, 370), (270, 346), (223, 326),
    (180, 298), (140, 270)
]
d.polygon(left_outer, fill=pink)

# Right arc purple segment
right_outer = [
    (362, 208), (327, 140), (257, 116), (196, 140), (137, 196),
    (92, 258), (114, 338), (176, 370), (242, 346), (289, 326),
    (332, 298), (372, 270)
]
d.polygon(right_outer, fill=purple)

# Middle circular rings
# Top-left arc peach
for radius, width, color, start, end in [
    (210, 62, pink, 210, 350),
    (210, 62, peach, 350, 80),
    (210, 62, orange, 80, 180),
    (210, 62, purple, 180, 210),
]:
    d.arc((256-radius, 256-radius, 256+radius, 256+radius), start=start, end=end, fill=color, width=width)

# Lower accent segments to better mimic the provided ring segments
for radius, width, color, start, end in [
    (170, 70, purple, 215, 330),
    (170, 70, pink, 330, 75),
    (170, 70, orange, 75, 160),
    (170, 70, peach, 160, 215),
]:
    d.arc((256-radius, 256-radius, 256+radius, 256+radius), start=start, end=end, fill=color, width=width)

# White inner discs to create the logo center
for r in [118, 96, 70]:
    d.ellipse((256-r, 256-r, 256+r, 256+r), fill=light)

# Add the black central cutout resembling the original emblem
black_mask = Image.new('RGBA', (W, H), (0, 0, 0, 0))
black_draw = ImageDraw.Draw(black_mask)
black_draw.ellipse((200, 200, 312, 312), fill=(0, 0, 0, 255))
img.alpha_composite(black_mask)

# Add crisp inner ring gaps by layering dark cutouts between each arc
# Use a few black wedges to mimic the open gaps in the logo
cut = Image.new('RGBA', (W, H), (0, 0, 0, 0))
cd = ImageDraw.Draw(cut)
for cx, cy, r, start, end, fill in [
    (256, 256, 220, 125, 208, (0, 0, 0, 255)),
    (256, 256, 220, 208, 290, (0, 0, 0, 255)),
    (256, 256, 220, 290, 55, (0, 0, 0, 255)),
    (256, 256, 220, 55, 125, (0, 0, 0, 255)),
]:
    cd.pieslice((cx-r, cy-r, cx+r, cy+r), start=start, end=end, fill=fill)
img.alpha_composite(cut)

# cleaner cutouts at the top left and bottom right to suggest the emblem shape
for box in [
    (78, 104, 214, 240),
    (298, 104, 434, 240),
    (90, 278, 226, 414),
    (286, 278, 422, 414),
]:
    d.ellipse(box, fill=(0, 0, 0, 255))

# Save to public/favicon.png
output_path = r'C:\Repo\SafeWays\safeways-landing-page\public\favicon.png'
img.save(output_path)
print(f'Saved favicon to {output_path}')
