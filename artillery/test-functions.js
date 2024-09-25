module.exports = { proxy }

async function proxy(page, vuContext, events, test) {
  let resolve
  const done = new Promise(r => resolve = r)

  await page.exposeFunction('__report_metric', (type, name, value) => {
    events.emit(type, `${vuContext.scenario.name} ${name}`, value)
  })

  await page.exposeFunction('__report_done', resolve)

  console.log('GOING TO', vuContext.scenario.name)
  await page.goto(vuContext.scenario.name)

  await done
}
