import urllib.request

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Referer': 'https://cornerstonebuildcom.com/'
}

candidates = [
    'https://cornerstonebuildcom.com/wp-content/uploads/2024/09/cropped-CS-LOGO-FINAL-01.jpg',
    'https://cornerstonebuildcom.com/wp-content/uploads/2024/09/cropped-CS-LOGO-FINAL-01.png',
    'https://cornerstonebuildcom.com/wp-content/uploads/2024/09/CS-LOGO-FINAL-01.jpg',
    'https://cornerstonebuildcom.com/wp-content/uploads/2024/09/CS-LOGO-FINAL-01.png',
    'https://cornerstonebuildcom.com/wp-content/uploads/2024/09/CS-LOGO-FINAL-01-scaled.jpg',
    'https://cornerstonebuildcom.com/wp-content/uploads/2024/09/CS-LOGO-FINAL-01-300x300.jpg',
    'https://cornerstonebuildcom.com/wp-content/uploads/2024/09/cropped-CS-LOGO-FINAL-01-270x270.jpg'
]

for url in candidates:
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            print(f"FOUND: {url} -> SUCCESS ({response.status})")
    except Exception as e:
        pass
