const { Builder, By, Key, until  } = require('selenium-webdriver');
const fs = require('fs');

const driver = new Builder().forBrowser('firefox').build();

driver.get('https://www.w3schools.com/');

// Function to capture screenshots
async function captureScreenshot(pageName) {
  try {
    await driver.wait(until.titleContains('W3Schools Online Web Tutorials'), 5000);

    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync(`${pageName}.png`, screenshot, 'base64');
    console.log(`Screenshot captured for ${pageName}`);
  } catch (err) {
    console.error(`Error capturing screenshot for ${pageName}: ${err}`);
  }
}

// Function to navigate through pages and capture screenshots
async function navigateAndCapture() {
  // Capture screenshot of the home page
  await captureScreenshot('home');

  // Close the browser
  await driver.quit();
}

// Start the navigation and screenshot capture process
navigateAndCapture();