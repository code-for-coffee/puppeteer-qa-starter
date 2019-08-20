const puppeteer = require('puppeteer')

const runHeadless = (process.env.NODE_ENV === 'development') ? false : true;

(async () => {
  const browser = await puppeteer.launch({
    headless: runHeadless
  })

  const page = await browser.newPage()
  await page.goto('https://arstechnica.com')

  const result = await page.content()

  console.log(result)

  browser.close()

})()