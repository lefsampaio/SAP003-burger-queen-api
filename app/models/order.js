'use strict';
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        clientName: DataTypes.STRING,
        TableId: DataTypes.INTEGER,
        status_order: DataTypes.STRING
    }, {});
    Order.associate = function (models) {
        Order.hasMany(models.Order_Itens);
        Order.belongsTo(models.Table);
    };
    return Order;
};