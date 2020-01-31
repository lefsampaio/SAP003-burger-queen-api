require('dotenv').config();

module.exports = {
  "development": {
    username: 'postgres',
    password: 'Leticia2846',
    database: 'burguer-queen',
    host: 'localhost',
    dialect: 'postgres',
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "operatorsAliases": false,
    "dialectOptions": {
      "ssl": true
    }
  }
}