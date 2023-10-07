"use strict";

const { sequelize } = require("../models");

module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Define the table name
      const tableName = "Cattle";
  
      // Define options
      const options = {};
  
      if (process.env.NODE_ENV === "production") {
        options.schema = process.env.SCHEMA; // Define your schema in options object
      }
  
      // Create the table
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
      }, options);
    },
  
    down: async (queryInterface, Sequelize) => {
      // Drop the table
      const tableName = "Cattle";
  
      await queryInterface.dropTable(tableName);
    },
};
