const db = require('../database')
const DataTypes = db.Sequelize.DataTypes

const User = db.sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: false
  }
}, {
  tableName: 'users',
  timestamps: true
})

db.sequelize.sync()

module.exports = User
