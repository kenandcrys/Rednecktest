"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cattle extends Model {
    // You can define custom methods or validations here
  }

  Cattle.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      pricePerBag: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      pricePer20: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      pricePer40: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      freezeTableName: true,
    },
    {
      sequelize,
      modelName: "Cattle",
    }
  );
  sequelize.clearModelsCache();

// Synchronize the model with the database (creates the table if it doesn't exist)
sequelize.sync()
  .then(() => {
    console.log("Database and tables have been synchronized.");
  })
  .catch((error) => {
    console.error("Error synchronizing database:", error);
  });

  return Cattle;
};
