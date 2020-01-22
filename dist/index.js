const express = require('express');

const {
  Sequelize
} = require('sequelize');

const routes = require('./routes');

const app = express();
const sequelize = new Sequelize('postgres://user:postgres:5432/burguer-queen');
app.use(express.json());
app.use(routes);
app.listen(3000); // sequelize.connect('postgres://user:postgres:5432/burguer-queen', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });