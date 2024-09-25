export async function authenticate() {
  const start = Date.now()
  await Agent.environment()
  const end = Date.now()

  await __report_metric('histogram', 'authentication', end - start)
  await __report_done()
}