module.exports = { helloFlow } 

async function helloFlow(page, vuContext, events, test) {
  const { step } = test

  await step('load', async () => {
    await page.goto('/')
  })

  await step('authenticated', async () => {
    const selector = '.v-btn' // '#counter' // 
    await page.waitForSelector(selector)  
  })

  // TODO: how do we know the metrics for how long it takes to get to here?
}
