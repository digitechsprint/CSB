from bs4 import BeautifulSoup

html_path = r'd:\3Dbuildcom\3Dbuildcom\homy.framer.media\index.html'
html = open(html_path, encoding='utf-8').read()
soup = BeautifulSoup(html, 'html.parser')

cards = soup.find_all(attrs={"data-framer-name": "Property card"})
print(f"Found {len(cards)} elements with data-framer-name='Property card' on index.html")

for idx, card in enumerate(cards[:6]):
    print(f"\n--- Card {idx} ---")
    texts = [t.strip() for t in card.find_all(string=True) if t.strip()]
    print("Texts:", texts)
