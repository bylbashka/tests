const puppeteer = require('puppeteer');
const assert  = require('chai').assert;

const opts = {
	headless: true
};

describe('landing page test', async () => {
  it('browser opens succesfully', async () => {
    browser = await puppeteer.launch(opts);
  });

  it('should open landing', async () => {
    page = await browser.newPage();
  });

  it('landing should load', async () => {
    const response = await page.goto('https://welayout.com', {waitUntil: 'domcontentloaded'});
    assert.strictEqual(response.status(), 200);
  }).timeout(0);
  
  it( 'browser closes succesfully', async () => {
    await browser.close();
  });
});