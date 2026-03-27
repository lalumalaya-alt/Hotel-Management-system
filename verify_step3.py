from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    page.goto(f"file://{os.getcwd()}/index_local.html")
    page.wait_for_timeout(2000)

    # Wait for the dashboard to render first
    page.wait_for_selector("text=Dashboard", timeout=5000)

    # Click the Restaurant menu in the sidebar
    page.click("li:has-text('Restaurant')")
    page.wait_for_timeout(1000)

    print("Navigated to Restaurant View.")

    # Check if we are there
    page.wait_for_selector("text=Restaurant / Services", timeout=5000)

    # Interact with form
    page.click("input[type='radio'][value='205']")
    page.wait_for_timeout(500)

    # Fill first line item
    selects = page.locator("select[required]")
    selects.nth(0).select_option("Dinner") # meal period
    page.wait_for_timeout(500)

    # Index 0 is Meal Period, Index 1 is the line item
    selects.nth(1).select_option("Grilled Fish")

    # The rate should auto-populate to 150
    page.wait_for_timeout(500)

    # Add second item
    page.click("button:has-text('Add Item')")
    page.wait_for_timeout(500)

    # Fill second line item
    selects.nth(2).select_option("Lemonade")
    page.wait_for_timeout(500)

    qtys = page.locator("input[type='number'][step='1']")
    qtys.nth(1).fill("2")

    page.wait_for_timeout(1000)

    # Take screenshot of the populated form
    page.screenshot(path="/home/jules/verification/screenshots/restaurant_itemized_form.png", full_page=True)
    page.wait_for_timeout(1000)

    # Submit the form to test payload logic
    page.click("button:has-text('Add Order')")
    page.wait_for_timeout(2000)

    print("Screenshot saved and order submitted.")

if __name__ == "__main__":
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={"width": 1280, "height": 900},
            record_video_dir="/home/jules/verification/videos"
        )

        context.add_init_script("""
            window.localStorage.setItem('mri_session', JSON.stringify({user: 'admin', role: 'admin', loginTime: Date.now()}));
        """)

        page = context.new_page()

        # log payload object sent to addFoodOrder from our mock
        page.on("console", lambda msg: print(f"Browser console: {msg.text}"))

        try:
            run_cuj(page)
        except Exception as e:
            print(f"Error during verification: {e}")
            page.screenshot(path="/home/jules/verification/error.png")
        finally:
            context.close()
            browser.close()
