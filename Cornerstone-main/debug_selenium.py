import os
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")
chrome_options.add_argument("--window-size=1920,1080")

driver = webdriver.Chrome(options=chrome_options)
try:
    driver.get("http://localhost:8000/homy.framer.media/about-us.html")
    # Wait for page to fully load and hydrate
    time.sleep(3)
    
    # Save screenshot of the desktop fold
    screenshot_path = r"C:\Users\akkik\.gemini\antigravity\brain\668d606f-0f87-40c5-9ead-9a85b22c3df1\selenium_about_us_desktop.png"
    driver.save_screenshot(screenshot_path)
    print(f"Saved screenshot to {screenshot_path}")
    
    # Let's inspect the actual text nodes of the page at desktop size
    # We can write the texts of all elements to a file
    elements = driver.find_elements("xpath", "//*[contains(@class, 'framer-') or contains(@class, 'framer-text')]")
    out = []
    for i, el in enumerate(elements):
        try:
            txt = el.text.strip()
            if txt:
                out.append(f"El {i}: tag={el.tag_name}, class={el.get_attribute('class')}, text='{txt.replace(chr(10), ' ')}'")
        except:
            pass
    with open(r'd:\3Dbuildcom\selenium_texts.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(out))
    print("Saved all selenium texts to selenium_texts.txt")
finally:
    driver.quit()
