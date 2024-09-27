export async function authenticate() { return authenticateAndWait(0) }
export async function authenticateAndWait10s() { await authenticateAndWait(10) }
export async function authenticateAndWait20s() { await authenticateAndWait(20) }
export async function authenticateAndWait30s() { await authenticateAndWait(30) }

async function authenticateAndWait(seconds) {
  const start = Date.now()
  await Agent.environment()
  const end = Date.now()

  await __report_metric('histogram', 'authentication', end - start)
  await new Promise(r => setTimeout(r, seconds * 1000))
  await __report_done()
}

export async function write1PerSecond() {
  const start = Date.now()
  await Agent.environment()
  const end = Date.now()

  await __report_metric('histogram', 'authentication', end - start)

  const scope = await Agent.state('test')
  scope.update = 0
  for (let i=0; i<300; i++) {
    await new Promise(r => setTimeout(r, 100))
    scope.update += 1
  }

  const startSync = Date.now()
  await Agent.synced()
  const endSync = Date.now()

  await __report_metric('histogram', 'synced after updates', endSync - startSync)

  await __report_done()
}

export async function write1SQLBackedUpdatePerSecond() {
  const start = Date.now()
  await Agent.environment()
  const end = Date.now()

  await __report_metric('histogram', 'authentication', end - start)

  const id = await Agent.create({
    active_type: 'application/json;type=test_item'
  })

  const scope = await Agent.state(id)
  scope.update = 0
  for (let i=0; i<30; i++) {
    await new Promise(r => setTimeout(r, 1000))
    scope.update += 1
  }

  const startSync = Date.now()
  await Agent.synced()
  const endSync = Date.now()

  await __report_metric('histogram', 'synced after updates', endSync - startSync)

  await __report_done()
}

export async function querySQLBackedScope() {
  const start = Date.now()

  for (let i=0; i<30; i++) {
    await new Promise(r => setTimeout(r, 1000))
    const results = await Agent.query('test_items')
    scope.update += 1
  }

  await Agent.environment()
  const end = Date.now()

  await __report_metric('histogram', 'got simply query results', end - start)
  await __report_done()
}