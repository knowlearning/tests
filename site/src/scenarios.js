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
