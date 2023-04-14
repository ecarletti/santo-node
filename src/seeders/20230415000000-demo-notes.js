'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('notes', [
      {
        title: 'Nota de prueba 1',
        description: 'Descripción de la nota de prueba 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Nota de prueba 2',
        description: 'Descripción de la nota de prueba 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('notes', null, {});
  }
};
