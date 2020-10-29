const puppeteer = require('puppeteer')
const fs = require('fs')

async function run () {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ width: 1200, height: 630 })
  const html = fs.readFileSync('./_site/index.html', 'utf8')
  await page.setContent(html)
  await page.evaluate(() => { document.body.style.zoom = 1.6 })
  await page.screenshot({ path: '/tmp/og-image.png' })
  await browser.close()
}

run()
