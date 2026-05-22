from bs4 import BeautifulSoup

html_path = r'd:\3Dbuildcom\3Dbuildcom\homy.framer.media\properties.html'
html = open(html_path, encoding='utf-8').read()
soup = BeautifulSoup(html, 'html.parser')

cards = soup.find_all(attrs={"data-framer-name": "Property card"})
print(f"Found {len(cards)} cards")

for i in range(min(5, len(cards))):
    print(f"\nCard {i}:")
    for child in cards[i].descendants:
        if child.name == 'p' or child.name == 'span' or child.name == 'div':
            txt = child.string or child.text
            if txt and txt.strip():
                print(f"  <{child.name} class='{child.get('class')}'>: '{txt.strip()}'")
