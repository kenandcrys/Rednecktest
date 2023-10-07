"use strict";

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define the table names
    const tableNames = [
      "Cattle",
    ];

    // Loop through table names and create each table
    for (const tableName of tableNames) {
      await queryInterface.createTable(tableName, {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        description: {
          type: Sequelize.TEXT,
        },
        pricePerBag: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false,
        },
        pricePer20: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false,
        },
        pricePer40: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false,
        },
        url: {
          type: Sequelize.TEXT,
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      });
    }

    // Insert data into the tables
    for (const tableName of tableNames) {
      if (tableName === "Cattle") {
        await queryInterface.bulkInsert(
          tableName,
          [
            {
              name: "16% Dairy",
              description: "16% protein dairy cow feed",
              pricePerBag: 20.0,
              pricePer20: 19.0,
              pricePer40: 18.5,
              url: "https://i.imgur.com/sZwrxu6.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "BYB",
              description: "Barn yard buffet (all stock feed)",
              pricePerBag: 18.25,
              pricePer20: 17.25,
              pricePer40: 16.75,
              url: "https://i.imgur.com/g7Bt1a7.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Cattle Fattener",
              description: "Used to put weight on Cattle",
              pricePerBag: 20.5,
              pricePer20: 19.5,
              pricePer40: 19.0,
              url: "https://i.imgur.com/TCQNEDy.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Chris Mix",
              description: "",
              pricePerBag: 20.25,
              pricePer20: 19.25,
              pricePer40: 18.75,
              url: "https://i.imgur.com/Ap1wtAZ.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            // Add more records for the "Cattle" table as needed...
          ],
          {}
        );
      }
      // Add similar code blocks for other tables here...
    }
    await sequelize.sync();

    return Promise.resolve();
  },

  down: async (queryInterface, Sequelize) => {
    // Drop all the tables in reverse order
    const tableNames = [
      "Cattle",
    ];

    for (const tableName of tableNames) {
      await queryInterface.dropTable(tableName);
    }

    return Promise.resolve();
  },
};
