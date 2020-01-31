'use strict';
module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('Orders', {
        clientName: DataTypes.STRING,
        TableId: DataTypes.INTEGER,
        status_order: DataTypes.STRING
    }, {});
    Orders.associate = function (models) {
        Orders.belongsToMany(models.Products, { through: "Order_Itens" });
        Orders.belongsTo(models.Tables);

    };
    return Orders;
};

