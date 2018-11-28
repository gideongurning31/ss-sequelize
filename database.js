'use strict'
const Sequelize = require('sequelize')
let db = {}

let sequelize = new Sequelize(
  'sharing_session_sequelize', 'root', '',
  {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3306',
    timezone: 'Asia/Jakarta',
    logging: str => { console.log(str) },
    operatorsAliases: false,
    pool: {
      max: 1,
      min: 0,
      acquire: 30000,
      idle: 300
    }
  }
)

db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db
