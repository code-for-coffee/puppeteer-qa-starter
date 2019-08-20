const chromePuppet = require('puppeteer')
const firefoxPuppet = require('puppeteer-firefox');

const runHeadless = (process.env.NODE_ENV === 'development') ? false : true;

const puppetShow = (puppeteer, stage = "Chrome") => {

  (async () => {
    const browser = await puppeteer.launch({
      headless: runHeadless,
      ...(stage === 'Edge' && {
        executablePath:
          '/Applications/Microsoft Edge Dev.app/Contents/MacOS/Microsoft Edge Dev'
      })
    })
  
    const page = await browser.newPage()
    await page.goto('https://arstechnica.com')
    const result = await page.content()
    await page.screenshot({
      path: `./screenshots/${stage}-screen.png`
    })
    console.log(result)
    browser.close()
  
  })()
}

puppetShow(chromePuppet)
puppetShow(firefoxPuppet, 'Firefox')
puppetShow(chromePuppet, 'Edge')