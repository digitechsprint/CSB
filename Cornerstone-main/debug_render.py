import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        await page.goto("http://localhost:8000/homy.framer.media/about-us.html")
        await page.wait_for_timeout(2000) # wait for hydration
        
        # Find all divs with text containing "About" or "ABOUT"
        elements = await page.query_selector_all("p, span, h1, h2, h3, h4, h5, h6")
        for i, el in enumerate(elements):
            txt = await el.text_content()
            txt = txt.strip() if txt else ""
            if "about" in txt.lower() or "cornerstone" in txt.lower():
                print(f"El {i}: tag={await el.evaluate('e => e.tagName')}, class={await el.evaluate('e => e.className')}, text='{txt}'")
                
        # Also print the FAQs that are visible
        print("\n--- FAQs VISIBLE ---")
        faqs = await page.query_selector_all(".framer-1wcslto")
        for i, faq in enumerate(faqs):
            disp = await faq.evaluate("e => window.getComputedStyle(e).display")
            txt = await faq.text_content()
            txt = txt.strip().replace('\n', ' ') if txt else ""
            print(f"FAQ {i}: display={disp}, text='{txt[:120]}'")
            
        await browser.close()

asyncio.run(main())
