html = open(r'd:\3Dbuildcom\3Dbuildcom\homy.framer.media\about-us.html', encoding='utf-8').read()
import re
# Remove script tags
html_no_scripts = re.sub(r'<script>[\s\S]*?</script>', '', html)
html_no_scripts = re.sub(r'<script\b[\s\S]*?</script>', '', html_no_scripts)

matches = []
for m in re.finditer(r'About CornerStone Buildcom', html_no_scripts):
    start = max(0, m.start() - 50)
    end = min(len(html_no_scripts), m.end() + 50)
    matches.append(html_no_scripts[start:end])

print(f"Total matches of 'About CornerStone Buildcom' in HTML body: {len(matches)}")
for m in matches:
    print("--- MATCH ---")
    print(m.strip().replace('\n', ' '))
