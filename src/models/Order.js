const { Sequelize } = require('sequelize');
const sequelize = require('../database/database')

const Order = sequelize.define('Order', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    count: {
        type: Sequelize.INTEGER,
    },
    name: {
        type: Sequelize.TEXT,
    },
    price: {
        type: Sequelize.DECIMAL,
    },
    type: {
        type: Sequelize.TEXT,
    },

});
// console.log(Order === sequelize.models.Order);
module.exports = sequelize.model('Order', Order);
