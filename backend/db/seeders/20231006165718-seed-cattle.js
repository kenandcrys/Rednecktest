'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tableNames = [
      "Swine",
      "StraightGrains",
      "SheepAndGoat",
      "Rabbit",
      "Poultry",
      "Equine",
      "Cattle",
      // Add other table names as needed...
    ];

    for (const tableName of tableNames) {
      const data = [];

      if (tableName === "Swine") {
        data.push(
          {
            name: "14% Hog",
            description: "14% protein hog feed",
            pricePerBag: 21.0,
            pricePer20: 20.0,
            pricePer40: 19.5,
            url: "https://i.imgur.com/Vnmq7kg.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "16% Hog",
            description: "16% protein hog feed",
            pricePerBag: 22.0,
            pricePer20: 21.0,
            pricePer40: 20.5,
            url: "https://i.imgur.com/szlzE8G.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "18% Pig Starter",
            description: "18% protein piglet starter",
            pricePerBag: 24.25,
            pricePer20: 23.25,
            pricePer40: 22.75,
            url: "https://i.imgur.com/IrSNO3Q.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          // Add more data for the "Swine" table as needed...
        );
      } else if (tableName === "StraightGrains") {
        data.push(
          {
            name: "Rolled Barley",
            description: "Rolled barley",
            pricePerBag: 20.0,
            pricePer20: 19.0,
            pricePer40: 18.5,
            url: "https://i.imgur.com/K0RcxwH.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Rolled Corn",
            description: "Rolled corn",
            pricePerBag: 20.0,
            pricePer20: 19.0,
            pricePer40: 18.5,
            url: "https://i.imgur.com/m6wI0jU.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Soybean Meal",
            description: "Natural source of protein",
            pricePerBag: 28.0,
            pricePer20: 27.0,
            pricePer40: 26.5,
            url: "https://i.imgur.com/4IaUJci.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          // Add more data for the "StraightGrains" table as needed...
        );
      }
      // Add similar data blocks for other tables here...
      else if (tableName === "SheepAndGoat") {
        data.push(
          {
            name: "Shirley Sheep Pellet",
            description: "16% protein sheep feed",
            pricePerBag: 22.5,
            pricePer20: 21.5,
            pricePer40: 21.0,
            url: "https://i.imgur.com/5sqHIj6.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Goat Pellet",
            description: "General goat feed",
            pricePerBag: 22.25,
            pricePer20: 21.25,
            pricePer40: 20.75,
            url: "https://i.imgur.com/Z33dREG.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Sheep and Goat",
            description: "Standardized sheep and goat feed",
            pricePerBag: 21.5,
            pricePer20: 20.5,
            pricePer40: 20.0,
            url: "https://i.imgur.com/7MxJM6m.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          // Add more data for the "SheepAndGoat" table as needed...
        );
      } else if (tableName === "Rabbit") {
        data.push(
          {
            name: "16% Rabbit",
            description: "16% protein rabbit feed",
            pricePerBag: 22.5,
            pricePer20: 21.5,
            pricePer40: 21.0,
            url: "https://i.imgur.com/ZS8IB7K.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "18% Rabbit",
            description: "18% protein rabbit feed",
            pricePerBag: 23.75,
            pricePer20: 22.75,
            pricePer40: 22.25,
            url: "https://i.imgur.com/rijZXQd.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          // Add more data for the "Rabbit" table as needed...
        );
      } else if (tableName === "Poultry") {
        data.push(
          {
            name: "All Purpose",
            description: "18% protein All purpose poultry feed",
            pricePerBag: 21.75,
            pricePer20: 20.75,
            pricePer40: 20.25,
            url: "https://i.imgur.com/ZzzjUJb.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Broiler Grower",
            description: "21% protein medicated feed for meat birds",
            pricePerBag: 25.0,
            pricePer20: 24.0,
            pricePer40: 23.5,
            url: "https://i.imgur.com/KxzEO7M.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Chick Start",
            description:
              "20% protein Medicated and non-medicated chick start",
            pricePerBag: 23.0,
            pricePer20: 22.0,
            pricePer40: 21.5,
            url: "https://i.imgur.com/hLoksc4.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          // Add more data for the "Poultry" table as needed...
        );
      } else if (tableName === "Equine") {
        data.push(
          {
            name: "12% Horse",
            description: "12% protein horse feed",
            pricePerBag: 20.75,
            pricePer20: 19.75,
            pricePer40: 19.25,
            url: "https://i.imgur.com/MNX4MHI.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Alfalfa Pellets",
            description: "Compressed alfalfa hay",
            pricePerBag: 24.25,
            pricePer20: 23.25,
            pricePer40: 22.75,
            url: "https://i.imgur.com/CiR8f6F.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Beet Pulp",
            description: "Pelletized beet pulp",
            pricePerBag: 21.5,
            pricePer20: 20.5,
            pricePer40: 20.0,
            url: "https://i.imgur.com/dPeHMom.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          // Add more data for the "Equine" table as needed...
        );
      } else if (tableName === "Cattle") {
        data.push(
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
          // Add more data for the "Cattle" table as needed...
        );
      }
      // Add similar data blocks for other tables here...

      await queryInterface.bulkInsert(tableName, data, {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Add commands to remove seeded data if needed
    // For example, you can use queryInterface.bulkDelete to delete all rows in the tables
    const tableNames = [
      "Swine",
      "StraightGrains",
      "SheepAndGoat",
      "Rabbit",
      "Poultry",
      "Equine",
      "Cattle",
      // Add other table names as needed...
    ];

    for (const tableName of tableNames) {
      await queryInterface.bulkDelete(tableName, null, {});
    }
  }
};

