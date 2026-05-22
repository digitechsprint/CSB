from bs4 import BeautifulSoup
html = open(r'd:\3Dbuildcom\3Dbuildcom\homy.framer.media\about-us.html', encoding='utf-8').read()
soup = BeautifulSoup(html, 'html.parser')
body_str = str(soup.body)[:40000]
open(r'd:\3Dbuildcom\about_hero_raw_utf8.txt', 'w', encoding='utf-8').write(body_str)
