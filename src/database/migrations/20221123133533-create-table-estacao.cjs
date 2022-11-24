'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.createTable('estacao', 
      {
        id: { 
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },

        luminosidade: { 
          type: Sequelize.FLOAT,
          allowNull: false
        },

        temperatura: { 
          type: Sequelize.FLOAT,
          allowNull: false
        },

        umidade: { 
          type: Sequelize.FLOAT,
          allowNull: false
        },

        pressao: { 
          type: Sequelize.INTEGER,
          allowNull: false
        },

        vento: { 
          type: Sequelize.INTEGER,
          allowNull: false
        },

        chuva: { 
          type: Sequelize.INTEGER,
          allowNull: false
        },

        createdAt: { 
          type: Sequelize.DATE,
          allowNull: false
        },

        updatedAt: { 
          type: Sequelize.DATE,
          allowNull: false
        }
      }
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:*/
    await queryInterface.dropTable('estacao');
     
  }
};
