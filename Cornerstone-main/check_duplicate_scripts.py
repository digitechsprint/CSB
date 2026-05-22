html = open(r'd:\3Dbuildcom\3Dbuildcom\homy.framer.media\about-us.html', encoding='utf-8').read()
import re
scripts = re.findall(r'<script>[\s\S]*?</script>', html)
print(f"Total scripts found: {len(scripts)}")
for i, s in enumerate(scripts):
    if "translations" in s:
        print(f"Script {i} contains translations! Length: {len(s)}")
        # Print the first 100 characters of the script to see what it is
        print(s[:300])
