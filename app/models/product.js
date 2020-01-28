'use strict';
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.DECIMAL, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false }
    }, {});
    Product.associate = function (models) {
        Product.hasMany(models.Order_Itens);
    };
    return Product;
};


