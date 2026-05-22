from bs4 import BeautifulSoup

html_path = r'd:\3Dbuildcom\3Dbuildcom\homy.framer.media\index.html'
html = open(html_path, encoding='utf-8').read()
soup = BeautifulSoup(html, 'html.parser')

cards = soup.find_all(attrs={"data-framer-name": "Property card"})
print(f"Found {len(cards)} elements")

for idx, card in enumerate(cards):
    parent = card.parent
    print(f"Card {idx} direct parent tag={parent.name}, class={parent.get('class')}")
    # Print outer container
    outer = parent.parent
    print(f"  Outer parent tag={outer.name}, class={outer.get('class')}, data-framer-name={outer.get('data-framer-name')}")
