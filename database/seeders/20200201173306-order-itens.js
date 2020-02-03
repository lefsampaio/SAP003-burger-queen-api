'use strict';
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Order_Itens', [{
      ProductId: 1,
      OrderId: 1,
      status_item: "pending",
      createdAt: new Date(),
      updatedAt: new Date()
    }
      , {
      ProductId: 2,
      OrderId: 2,
      status_item: "pending",
      createdAt: new Date(),
      updatedAt: new Date()
    }
      , {
      ProductId: 3,
      OrderId: 3,
      status_item: "pending",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ProductId: 4,
      OrderId: 4,
      status_item: "pending",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ProductId: 5,
      OrderId: 5,
      status_item: "pending",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ProductId:6,
      OrderId: 6,
      status_item: "pending",
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    );

  },

  down: (queryInterface) => {

    return queryInterface.bulkDelete('Order_Itens', null, {

    });

  }
};

