from playwright.sync_api import sync_playwright
import os
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(record_video_dir="/app/verification/video")
        page = context.new_page()

        try:
            html_path = f"file://{os.path.abspath('/app/test_index.html')}"
            page.goto(html_path)
            page.wait_for_selector('#root')
            page.wait_for_timeout(500)

            page.evaluate("window.localStorage.setItem('loggedIn', 'true');")
            page.wait_for_selector('text="Dashboard"', timeout=5000)
            page.wait_for_timeout(500)

            # Click on "Bookings" in the sidebar
            page.click('.sidebar li:has-text("Bookings")')
            page.wait_for_timeout(500)

            # Wait for the "New Booking" button to appear and click it
            page.wait_for_selector('button:has-text("New Booking")', timeout=5000)
            page.click('button:has-text("New Booking")')
            page.wait_for_timeout(500)

            # Type something into the new fix room rent input to verify it works
            page.fill('input[placeholder="Leave blank for standard rent"]', "1500")
            page.wait_for_timeout(500)

            page.screenshot(path="/app/verification/final_booking_modal.png", full_page=True)
            page.wait_for_timeout(1000)

            # Click cancel explicitly
            page.click('text="Cancel"')
            page.wait_for_timeout(500)

            # Now verify Check-In page
            page.click('.sidebar li:has-text("Check-In")')
            page.wait_for_timeout(500)

            page.wait_for_selector('button:has-text("Advance Booking")', timeout=5000)
            page.wait_for_timeout(500)

            page.fill('input[placeholder="Leave blank for standard rent"]', "2000")
            page.wait_for_timeout(500)

            page.screenshot(path="/app/verification/final_checkin_page.png", full_page=True)
            page.wait_for_timeout(1000)

        finally:
            context.close()
            browser.close()

if __name__ == "__main__":
    run()
