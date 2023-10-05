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
      sequelize,
      modelName: "Cattle",
      freezeTableName: true,
    },
  );
  return Cattle;
};
