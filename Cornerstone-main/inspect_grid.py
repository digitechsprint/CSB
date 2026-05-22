from bs4 import BeautifulSoup

html_path = r'd:\3Dbuildcom\3Dbuildcom\homy.framer.media\properties.html'
html = open(html_path, encoding='utf-8').read()
soup = BeautifulSoup(html, 'html.parser')

container = soup.find(class_='framer-ys4r8s')
if container:
    print("Found container!")
    for idx, child in enumerate(container.find_all(recursive=False)):
        print(f"Child {idx}: tag={child.name}, class={child.get('class')}, data-framer-name={child.get('data-framer-name')}")
        # Print subchildren
        for idx2, sub in enumerate(child.find_all(recursive=False)):
            print(f"  Sub {idx2}: tag={sub.name}, class={sub.get('class')}, data-framer-name={sub.get('data-framer-name')}")
else:
    print("Container not found.")
