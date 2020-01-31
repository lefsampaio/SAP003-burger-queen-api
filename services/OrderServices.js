const database = require('../app/models');

class OrderService {
  static async getAllOrders() {
    try {
      return await database.Orders.findAll({
        include: [
          { model: database.Tables, as: 'Table' },
          { model: database.Products, duplicating: true }
        ],
      })
    } catch (error) {
      console.log(error);
      throw error
    }
  }

  static async addOrder(newOrder) {
    try {
      return await database.Orders.create(newOrder)
    } catch (error) {
      throw error
    }
  }


  static async updateOrder(id, updateOrder) {
    try {
      const OrderToUpdate = await database.Orders.findOne({
        where: { id: Number(id) }
      })

      if (OrderToUpdate) {
        await database.Orders.update(updateOrder, { where: { id: Number(id) } })

        return updateOrder
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getOrder(id) {
    try {
      const theOrder = await database.Orders.findOne({
        where: { id: Number(id) }
      })

      return theOrder
    } catch (error) {
      throw error
    }
  }

  static async deleteOrder(id) {
    try {
      const OrderToDelete = await database.Orders.findOne({ where: { id: Number(id) } })

      if (OrderToDelete) {
        const deletedOrder = await database.Orders.destroy({
          where: { id: Number(id) }
        })
        return deletedOrder
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

module.exports = OrderService