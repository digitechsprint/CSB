import os
import re

BASE_DIR = r"d:\3DBuildcom\3Dbuildcom\homy.framer.media"

# Logo Replacements
LOGO_URL = "https://cornerstonebuildcom.com/wp-content/uploads/2024/09/CSB-White-Logo.webp"
FAVICON_URL = "https://cornerstonebuildcom.com/wp-content/uploads/2024/09/cropped-CS-LOGO-FINAL-01-270x270.jpg"

REPLACEMENTS = [
    # Logos
    ("../framerusercontent.com/images/dCLiSk3yyEASIAiQcx3pqfCcTA.svg", LOGO_URL),
    ("https://framerusercontent.com/images/dCLiSk3yyEASIAiQcx3pqfCcTA.svg", LOGO_URL),
    ("../framerusercontent.com/images/5pXNN0nOEKyuh5SSnsdP1bwaO5M.svg", LOGO_URL),
    ("https://framerusercontent.com/images/5pXNN0nOEKyuh5SSnsdP1bwaO5M.svg", LOGO_URL),

    # Favicons
    ("../framerusercontent.com/images/wtAazKz9ClT6GcQ95wWsMeO0LI.svg", FAVICON_URL),
    ("https://framerusercontent.com/images/wtAazKz9ClT6GcQ95wWsMeO0LI.svg", FAVICON_URL),
    ("../framerusercontent.com/images/hpBPVJ4EDWe6VR2UVdlcckRzGFo.svg", FAVICON_URL),
    ("https://framerusercontent.com/images/hpBPVJ4EDWe6VR2UVdlcckRzGFo.svg", FAVICON_URL),
    ("../framerusercontent.com/images/G7lDIA4ifkbEuCxtUyJ4bPWkXtI.png", FAVICON_URL),
    ("https://framerusercontent.com/images/G7lDIA4ifkbEuCxtUyJ4bPWkXtI.png", FAVICON_URL),
    
    # OG Image
    ("../framerusercontent.com/images/AeIflYjH5fuiHVtk50mXoih3pQ.jpg", LOGO_URL),
    ("https://framerusercontent.com/images/AeIflYjH5fuiHVtk50mXoih3pQ.jpg", LOGO_URL),
]

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    original = content
    for old, new in REPLACEMENTS:
        content = content.replace(old, new)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"[UPDATED LOGOS] {filepath}")
    else:
        pass

def main():
    html_files = []
    for root, dirs, files in os.walk(BASE_DIR):
        for fname in files:
            if fname.endswith('.html'):
                html_files.append(os.path.join(root, fname))

    print(f"Found {len(html_files)} HTML files for logo replacements...\n")
    for fpath in html_files:
        process_file(fpath)
    print("\n[DONE] All logos updated.")

if __name__ == "__main__":
    main()
