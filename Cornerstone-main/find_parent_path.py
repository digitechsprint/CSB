from bs4 import BeautifulSoup

html_path = r'd:\3Dbuildcom\3Dbuildcom\homy.framer.media\properties.html'
html = open(html_path, encoding='utf-8').read()
soup = BeautifulSoup(html, 'html.parser')

cards = soup.find_all(attrs={"data-framer-name": "Property card"})
print(f"Found {len(cards)} elements with data-framer-name='Property card'")

for idx, card in enumerate(cards[:3]):
    parents = []
    curr = card.parent
    while curr:
        parents.append(f"{curr.name}.{'.'.join(curr.get('class', []))}")
        curr = curr.parent
    print(f"Card {idx} parents path:")
    print(" -> ".join(parents[::-1]))
