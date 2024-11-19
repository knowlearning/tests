module.exports = { proxy, agentEnvironmentLoad }

async function proxy(page, vuContext, events, test) {
  let resolve
  const done = new Promise(r => resolve = r)

  await page.exposeFunction('__report_metric', (type, name, value) => {
    events.emit(type, `${vuContext.scenario.name} ${name}`, value)
  })

  await page.exposeFunction('__report_done', resolve)
  await page.goto(`/${vuContext.scenario.name}`)

  await done
}

async function agentEnvironmentLoad(page, vuContext, events, test) {

  await page.goto('/teacher')

  const time = await page.evaluate(async () => {
    const start = Date.now()
    await window.Agent.environment()
    const end = Date.now()

    await new Promise(r => setTimeout(r, 30_000))

    return end - start
  });
  events.emit('histogram', `${vuContext.scenario.name} load environment`, time)
}