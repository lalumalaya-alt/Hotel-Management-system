import asyncio
from playwright.async_api import async_playwright
import time
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context()
        page = await context.new_page()

        await page.goto(f"file://{os.path.abspath('test_index.html')}")

        print("Waiting for dashboard to load...")
        try:
            await page.wait_for_selector('a:has-text("Bookings")', timeout=5000)
        except Exception as e:
            print("Failed to find Bookings link. Taking screenshot...")
            await page.screenshot(path="verification/debug_screenshot.png", full_page=True)
            raise e

        # Click on Bookings link to go to Bookings Tab
        print("Clicking Bookings link...")
        await page.locator('a:has-text("Bookings")').click()

        print("Waiting for Bookings container...")
        await page.wait_for_selector('#bookings-container', timeout=5000)

        print("Opening New Advance Booking modal...")
        await page.locator('button:has-text("New Advance Booking")').click()

        # Wait for the modal to be visible
        await page.wait_for_selector('#advanceBookingModal', state="visible", timeout=5000)

        print("Modal opened. Waiting a moment for dynamic room availability to load...")
        # Give it a second to "fetch" and calculate
        await page.wait_for_timeout(2000)

        # Ensure the modal has rendered its new fields by checking text
        # Example: look for 'Fix Room Rent', 'Discount (%)', 'GST Type'
        await page.wait_for_selector('label:has-text("Fix Room Rent")')
        await page.wait_for_selector('label:has-text("Discount (%)")')
        await page.wait_for_selector('label:has-text("GST Type")')

        # Fill in some stuff to show dynamic changes
        try:
            await page.fill('input[name="Standard"]', "1")
        except Exception:
            pass

        # Take a screenshot of the new modal
        os.makedirs("verification", exist_ok=True)
        screenshot_path = "verification/advance_booking_modal.png"
        await page.screenshot(path=screenshot_path, full_page=True)
        print(f"Screenshot saved to {screenshot_path}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
