'use strict'
const app = require('./app')
const Model = require('./database')
const port = 3000

function start() {
  Model.sequelize.authenticate()
    .then(() => {
      app.listen(port).on('listening', () => console.log(`Application running on port ${port}`))
		})
		.catch(error => {
      console.error(error)
      process.exit(-1)
		})
}

start()
