module.exports = { helloFlow } 

async function helloFlow(page, vuContext, events, test) {
  await page.goto(`/authenticate`)
}
