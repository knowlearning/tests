export async function authenticate() {
  const start = Date.now()
  const environment = await Agent.environment()
  const end = Date.now()
  //  TODO: report back metrics!
  console.log('Metrics to send back!', end - start)
}