from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    page.goto(f"file://{os.getcwd()}/index_local.html")
    page.wait_for_timeout(2000)

    # Wait for the dashboard to render first
    page.wait_for_selector("text=Dashboard", timeout=5000)

    # Click the Restaurant menu in the sidebar
    page.click("li:has-text('Restaurant')")
    page.wait_for_timeout(2000)

    page.screenshot(path="/home/jules/verification/debug_rest.png", full_page=True)
    # Check if there is an error boundary output
    content = page.content()
    if 'Application Error' in content or '<div id="root"></div>' in content:
        print("Page crashed!")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={"width": 1280, "height": 900}
        )
        context.add_init_script("""
            window.localStorage.setItem('mri_session', JSON.stringify({user: 'admin', role: 'admin', loginTime: Date.now()}));
        """)

        page = context.new_page()
        page.on("console", lambda msg: print(f"Browser console [{msg.type}]: {msg.text}"))
        page.on("pageerror", lambda exc: print(f"Browser page error: {exc}"))

        run_cuj(page)
        browser.close()
