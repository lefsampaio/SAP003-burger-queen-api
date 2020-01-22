const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'burguer-queen',
    'postgres',
    'Leticia2846',
    {
        host: 'localhost',
        port:'5432',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000,
        },
        // logging: false
    }
)
module.exports = sequelize;
