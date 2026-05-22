from bs4 import BeautifulSoup
html = open(r'd:\3Dbuildcom\3Dbuildcom\homy.framer.media\about-us.html', encoding='utf-8').read()
soup = BeautifulSoup(html, 'html.parser')

for txt in ["How do I contact a owner", "Can I explore rental", "Do I need an account"]:
    el = soup.find(string=lambda t: t and txt in t)
    if el:
        print(txt, '-> Parent classes:', [p.get('class') for p in el.parents if p.name == 'div'][:4])
    else:
        print(txt, "not found in HTML direct strings")
