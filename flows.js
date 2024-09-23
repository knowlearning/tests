module.exports = { helloFlow } 

async function helloFlow(page) {
  const localPILA = 'https://f74e9cb3-2b53-4c85-9b0c-f1d61b032b3f.localhost:9898'
  const localAdmin = 'https://localhost:5111'
  const target = localPILA
  await page.goto(target)
  await page.waitForSelector('#login-page')

  console.log('GOTLOGIN PAGE???')
  console.log('GOTLOGIN PAGE???---', await page.locator('#login-page').count())

  if (await page.locator('#login-page').count() === 0) {
    throw new Error('No login page!')
  }

  // TODO: how do we know the metrics for how long it takes to get to here?
}
