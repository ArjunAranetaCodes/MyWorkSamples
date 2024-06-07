const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the page with the form
  await page.goto('https://example.com/form');

  // Fill in the form fields
  await page.type('#name', 'John Doe');
  await page.type('#email', 'john.doe@example.com');
  await page.type('#message', 'Hello, this is a test message.');

  // Submit the form
  await page.click('#submit-button');

  // Wait for the form submission to complete
  await page.waitForNavigation();

  // Verify that the form was submitted successfully
  const successMessage = await page.$eval('#success-message', el => el.textContent);
  console.log(successMessage); // Should print the success message

  await browser.close();
})();