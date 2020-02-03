'use strict';
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Orders', [{
      clientName: "João",
      TableId: 4,
      status_order: "pending",
      createdAt: new Date(),
      updatedAt: new Date()
    }
      , {
        clientName: "Maria",
        TableId:6,
        status_order: "pending",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      , {
        clientName: "Juliana",
        TableId: 5,
        status_order: "pending",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        clientName: "Rafael",
        TableId: 3,
        status_order: "pending",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        clientName: "Paloma",
        TableId: 2,
        status_order: "pending",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        clientName: "Leticia",
        TableId: 1,
        status_order: "pending",
        createdAt: new Date(),
        updatedAt: new Date()
      }]
    );

  },

  down: (queryInterface) => {

    return queryInterface.bulkDelete('Orders', null, {

    });

  }
};
