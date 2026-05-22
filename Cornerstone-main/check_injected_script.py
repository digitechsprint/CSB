from bs4 import BeautifulSoup

html_path = r'd:\3Dbuildcom\3Dbuildcom\homy.framer.media\properties.html'
html = open(html_path, encoding='utf-8').read()
soup = BeautifulSoup(html, 'html.parser')

scripts = soup.find_all('script')
for idx, script in enumerate(scripts):
    if 'customProperties' in script.text:
        print(f"Found custom script (index {idx}):")
        print(script.text[:500])
        print("...")
        print(script.text[-500:])
