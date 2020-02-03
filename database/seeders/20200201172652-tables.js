'use strict';
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Tables', [{
      number:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
      , {
        number:2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      , {
        number:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number:4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number:5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number:6,
        createdAt: new Date(),
        updatedAt: new Date()
      }]
    );

  },

  down: (queryInterface) => {

    return queryInterface.bulkDelete('Tables', null, {

    });

  }
};
