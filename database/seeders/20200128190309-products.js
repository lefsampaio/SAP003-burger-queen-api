'use strict';
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Products', [{
      name: 'Café Americano',
      price: '5',
      type: 'breakfast',
      createdAt: new Date(),
      updatedAt: new Date()
    }
      , {
        name: 'Suco natural de fruta',
        price: '7',
        type: 'breakfast',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      , {
        name: 'Café com leite',
        price: '7',
        type: 'breakfast',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Misto Quente',
        price: '10',
        type: 'breakfast',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Batata Frita',
        price: '5',
        type: 'sideDish',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aneis de Cebola',
        price: '5',
        type: 'sideDish',
        createdAt: new Date(),
        updatedAt: new Date()
      }]
    );

  },

  down: (queryInterface) => {

    return queryInterface.bulkDelete('Products', null, {

    });

  }
};
