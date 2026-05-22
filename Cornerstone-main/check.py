import urllib.request
urls = [
    'https://cornerstonebuildcom.com/wp-content/uploads/2024/09/CSB-Logo.webp',
    'https://cornerstonebuildcom.com/wp-content/uploads/2024/09/CSB-Gold-Logo.webp',
    'https://cornerstonebuildcom.com/wp-content/uploads/2024/09/CS-Logo.webp',
    'https://cornerstonebuildcom.com/wp-content/uploads/2024/09/logo.webp',
    'https://cornerstonebuildcom.com/wp-content/uploads/2024/09/CSB-Logo.png',
    'https://cornerstonebuildcom.com/wp-content/uploads/2024/09/CSB-Main-Logo.webp'
]
for u in urls:
    try:
        urllib.request.urlopen(u)
        print('Found:', u)
    except Exception as e:
        pass
