const {
  Sequelize,
  Model,
  DataTypes
} = require('sequelize');

const sequelize = new Sequelize('postgres://user:postgres:5432/burguer-queen');
const User = sequelize.define('User', {
  name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    defaultValue: 'green'
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER
});
console.log(User === sequelize.models.User);
module.exports = sequelize.model('User', User);