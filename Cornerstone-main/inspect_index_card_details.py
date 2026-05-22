from bs4 import BeautifulSoup

html_path = r'd:\3Dbuildcom\3Dbuildcom\homy.framer.media\index.html'
html = open(html_path, encoding='utf-8').read()
soup = BeautifulSoup(html, 'html.parser')

cards = soup.find_all(attrs={"data-framer-name": "Property card"})
if cards:
    card = cards[0]
    print(f"Card tag: {card.name}, class: {card.get('class')}")
    print("\nChildren classes and texts:")
    for child in card.find_all(recursive=True):
        txt = child.text.strip()
        if txt:
            print(f"  {child.name} class={child.get('class')}: '{txt[:100]}'")
