module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.DECIMAL, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false }
    });
    
    return Order;
};