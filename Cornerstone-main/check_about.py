from bs4 import BeautifulSoup
html = open(r'd:\3Dbuildcom\3Dbuildcom\homy.framer.media\about-us.html', encoding='utf-8').read()
soup = BeautifulSoup(html, 'html.parser')
for el in soup.find_all(string=True):
    if "searching" in el.lower() or "budget" in el.lower() or "accurate" in el.lower():
        print(f"Found: '{el.strip()}' -> Parents: {[p.get('class') for p in el.parents if p.name == 'div'][:3]}")
