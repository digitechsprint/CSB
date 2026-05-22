html = open(r'd:\3Dbuildcom\3Dbuildcom\homy.framer.media\about-us.html', encoding='utf-8').read()
import re
scripts = re.findall(r'<script>[\s\S]*?</script>', html)
for i, s in enumerate(scripts):
    if "const translations =" in s:
        print(f"Found translation script! Length: {len(s)}")
        # Print lines around ABOUT US
        lines = s.split('\n')
        for line in lines:
            if "ABOUT" in line or "Discover homes" in line:
                print(line.strip())
