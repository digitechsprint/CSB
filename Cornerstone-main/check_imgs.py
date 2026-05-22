from bs4 import BeautifulSoup
html = open(r'd:\3Dbuildcom\3Dbuildcom\homy.framer.media\about-us.html', encoding='utf-8').read()
soup = BeautifulSoup(html, 'html.parser')
for img in soup.find_all('img'):
    print("img src:", img.get('src'), "srcset:", img.get('srcset'))
