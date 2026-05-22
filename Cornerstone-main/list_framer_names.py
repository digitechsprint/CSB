from bs4 import BeautifulSoup

html_path = r'd:\3Dbuildcom\3Dbuildcom\homy.framer.media\properties.html'
html = open(html_path, encoding='utf-8').read()
soup = BeautifulSoup(html, 'html.parser')

framer_names = set()
for tag in soup.find_all(attrs={"data-framer-name": True}):
    name = tag.get("data-framer-name")
    framer_names.add(name)

print("Unique data-framer-names:")
for n in sorted(framer_names):
    print(f"- {n}")
