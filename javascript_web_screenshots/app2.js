const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.w3schools.com/', { waitUntil: 'networkidle0' });

  const fullPageScreenshot = await page.screenshot({
    path: 'home2.png',
    fullPage: true,
  });

  console.log('Full-page screenshot captured successfully!');

  await browser.close();
})();