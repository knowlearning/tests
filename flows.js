module.exports = { helloFlow } 

async function helloFlow(page) {
  console.log('RRRRRRRRRRRRRRRRRUNNING!!!!!!!!!!!!!!!!!!')
  await page.goto('https://thailand.pilaproject.org/teacher')
  await page.waitForSelector('#login-page')

  if (await page.locator('#login-page').count() === 0) {
    throw new Error('No login page!')
  }

  // TODO: how do we know the metrics for how long it takes to get to here?
}
