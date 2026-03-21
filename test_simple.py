import asyncio
from playwright.async_api import async_playwright
import os
import json
import time

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context()
        page = await context.new_page()

        await page.goto(f"file://{os.path.abspath('test_index.html')}")

        # Inject the mock script and set local storage
        await page.evaluate("""() => {
            localStorage.setItem('mri_session', JSON.stringify({user: "admin", role: "admin", loginTime: Date.now()}));
        }""")

        # Reload so React picks up the new local storage
        await page.reload()

        print("Waiting for dashboard to load...")
        try:
            await page.wait_for_selector('.sidebar a', timeout=5000)
            print("Sidebar found!")
            links = await page.locator('.sidebar a').all_text_contents()
            print("Links found:", links)
        except Exception as e:
            print("Failed. Taking screenshot...")
            await page.screenshot(path="verification/debug_screenshot.png", full_page=True)

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
