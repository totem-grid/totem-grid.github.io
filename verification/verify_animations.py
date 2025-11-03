
from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Get the absolute path to the HTML files
        home_path = "file://" + os.path.abspath("public/index.html")
        partner_up_path = "file://" + os.path.abspath("public/partner-up.html")

        # Verify home page
        page.goto(home_path)
        page.screenshot(path="verification/current_home.png")

        # Verify partner-up page
        page.goto(partner_up_path)
        page.screenshot(path="verification/current_partner_up.png")

        browser.close()

if __name__ == "__main__":
    run()
