import os
import re

for fname in os.listdir(r'd:\3Dbuildcom'):
    if fname.endswith('.py'):
        path = os.path.join(r'd:\3Dbuildcom', fname)
        content = open(path, errors='ignore').read()
        if 'properties' in content.lower() or 'card' in content.lower():
            print(f"Found in {fname}:")
            for line in content.splitlines():
                if any(w in line.lower() for w in ['properties', 'card']):
                    print("  ", line.strip()[:120])
