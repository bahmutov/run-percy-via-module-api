const cypress = require('cypress')
const percyAgent = require('@percy/agent/dist/services/agent-service')
const p = new percyAgent.AgentService()
// looking at default configuration
// https://github.com/percy/percy-agent/blob/6b36aabb02e951661778e1ef5e7f9bc0c342d6cc/src/configuration/configuration.ts#L15
const configuration = {
  agent: {
    port: 5338
  },
  snapshot: {
    'percy-css': ''
  }
}
p.start(configuration)
  .then(() => {
    console.log('running Cyrpess')
    return cypress.run({})
  })
  .then(() => {
    console.log('stopping Percy agent')
    return p.stop()
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })


