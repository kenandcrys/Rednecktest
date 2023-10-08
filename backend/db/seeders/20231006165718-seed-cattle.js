"use strict";

const myData = [
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
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Cattle", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      },
      pricePerBag: {
        type: Sequelize.FLOAT,
      },
      pricePer20: {
        type: Sequelize.FLOAT,
      },
      pricePer40: {
        type: Sequelize.FLOAT,
      },
      url: {
        type: Sequelize.STRING,
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

    await queryInterface.bulkInsert("Cattle", myData);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Cattle");
  },
};
