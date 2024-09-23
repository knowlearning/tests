module.exports = { helloFlow } 

async function helloFlow(page, vuContext, events, test) {
  const { step } = test

  const localPILA = 'https://f74e9cb3-2b53-4c85-9b0c-f1d61b032b3f.localhost:9898'
  const localAdmin = 'https://localhost:5012'
  const target = localAdmin // 'http://localhost:5173'

  await step('load', async () => {
    await page.goto(target)
  })

  await step('authenticated', async () => {
    const selector = '.v-btn' // '#counter' // 
    await page.waitForSelector(selector)  
  })

  console.log('GOT LOGIN PAGE???')

  // TODO: how do we know the metrics for how long it takes to get to here?
}
