module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.DECIMAL, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false }
    });
    return Product;
};

