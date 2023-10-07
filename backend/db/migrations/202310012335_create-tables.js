'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define the table name
    const tableName = "Cattle";

    // Define options
    const options = {};

    if (process.env.NODE_ENV === "production") {
      options.schema = process.env.SCHEMA;
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

    // Return a Promise to ensure the migration is complete
    return Promise.resolve();
  },

  down: async (queryInterface, Sequelize) => {
    // Drop the table
    const tableName = "Cattle";

    await queryInterface.dropTable(tableName);
  },
};
