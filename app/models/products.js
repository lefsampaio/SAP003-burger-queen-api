'use strict';
module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('Products', {
        name: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.DECIMAL, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false }
    }, {});
    Products.associate = function (models) {
        Products.belongsToMany(models.Orders, { through: "Order_Itens" });
    };
    return Products;
};


