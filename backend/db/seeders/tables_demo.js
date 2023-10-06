"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Seed data for the 'Cattle' table
    const CattleData = [
      {
        name: "Cow",
        description: "A cow for testing",
        pricePerBag: 50.0,
        pricePer20: 900.0,
        pricePer40: 1600.0,
        url: "cow.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bull",
        description: "A bull for testing",
        pricePerBag: 55.0,
        pricePer20: 950.0,
        pricePer40: 1700.0,
        url: "bull.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Calf",
        description: "A calf for testing",
        pricePerBag: 45.0,
        pricePer20: 850.0,
        pricePer40: 1500.0,
        url: "calf.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Cattle", CattleData, {});

    // Seed data for the 'Swine' table
    const swineData = [
      {
        name: "Pig",
        description: "A pig for testing",
        pricePerBag: 40.0,
        pricePer20: 750.0,
        pricePer40: 1300.0,
        url: "pig.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sow",
        description: "A sow for testing",
        pricePerBag: 42.0,
        pricePer20: 770.0,
        pricePer40: 1350.0,
        url: "sow.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Boar",
        description: "A boar for testing",
        pricePerBag: 45.0,
        pricePer20: 800.0,
        pricePer40: 1400.0,
        url: "boar.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Swine", swineData, {});

    // Seed data for the 'SheepAndGoat' table
    const sheepAndGoatData = [
      // Add your data for 'SheepAndGoat' table here...
    ];

    await queryInterface.bulkInsert("SheepAndGoat", sheepAndGoatData, {});

    // Seed data for the 'Rabbit' table
    const rabbitData = [
      // Add your data for 'Rabbit' table here...
    ];

    await queryInterface.bulkInsert("Rabbit", rabbitData, {});

    // Seed data for the 'Poultry' table
    const poultryData = [
      // Add your data for 'Poultry' table here...
    ];

    await queryInterface.bulkInsert("Poultry", poultryData, {});

    // Seed data for the 'Equine' table
    const equineData = [
      // Add your data for 'Equine' table here...
    ];

    await queryInterface.bulkInsert("Equine", equineData, {});

    // Seed data for the 'StraightGrains' table
    const straightGrainsData = [
      // Add your data for 'StraightGrains' table here...
    ];

    await queryInterface.bulkInsert("StraightGrains", straightGrainsData, {});

    return Promise.resolve();
  },

  down: async (queryInterface, Sequelize) => {
    // Remove all records from the 'Cattle' table
    await queryInterface.bulkDelete("Cattle", null, {});

    // Remove all records from the 'Swine' table
    await queryInterface.bulkDelete("Swine", null, {});

    // Remove all records from the 'SheepAndGoat' table
    await queryInterface.bulkDelete("SheepAndGoat", null, {});

    // Remove all records from the 'Rabbit' table
    await queryInterface.bulkDelete("Rabbit", null, {});

    // Remove all records from the 'Poultry' table
    await queryInterface.bulkDelete("Poultry", null, {});

    // Remove all records from the 'Equine' table
    await queryInterface.bulkDelete("Equine", null, {});

    // Remove all records from the 'StraightGrains' table
    await queryInterface.bulkDelete("StraightGrains", null, {});

    return Promise.resolve();
  },
};
