import sys
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')
html_path = r'd:\3Dbuildcom\3Dbuildcom\homy.framer.media\properties.html'
html = open(html_path, encoding='utf-8').read()
soup = BeautifulSoup(html, 'html.parser')

out = []
out.append("Page Title: " + (soup.title.string if soup.title else "None"))

out.append("\nText snippets:")
text_nodes = [t.strip() for t in soup.find_all(string=True) if t.strip() and len(t.strip()) > 3]
for i, txt in enumerate(text_nodes[:150]):
    out.append(f"{i}: '{txt}'")

out.append("\nAll unique section names or framer component types:")
for tag in soup.find_all(attrs={"data-framer-name": True}):
    out.append(f"Tag: {tag.name}, class: {tag.get('class')}, name: {tag.get('data-framer-name')}")

with open(r'd:\3Dbuildcom\properties_info.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out))
print("Wrote output to properties_info.txt successfully.")
