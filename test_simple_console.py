import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        page.on("console", lambda msg: print(f"BROWSER CONSOLE: {msg.type}: {msg.text}"))
        page.on("pageerror", lambda err: print(f"BROWSER ERROR: {err}"))

        html_path = f"file://{os.path.abspath('test_index.html')}"
        await page.goto(html_path)

        await asyncio.sleep(2)
        await page.screenshot(path="verification/error_state.png")

        await browser.close()

asyncio.run(main())
