"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define the table names
    const tableNames = [
      "Swine",
      "StraightGrains",
      "SheepAndGoat",
      "Rabbit",
      "Poultry",
      "Equine",
      "Cattle",
    ];

    // Loop through table names and create each table
    for (const tableName of tableNames) {
      await queryInterface.createTable(tableName, {
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
      if (tableName === "Swine") {
        await queryInterface.bulkInsert(
          tableName,
          [
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
            // Add more records for the "Swine" table as needed...
          ],
          {}
        );
      } else if (tableName === "StraightGrains") {
        await queryInterface.bulkInsert(
          tableName,
          [
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
            {
              name: "Whole Barley",
              description: "Whole barley",
              pricePerBag: 19.75,
              pricePer20: 18.75,
              pricePer40: 18.25,
              url: "https://i.imgur.com/Vt8i1Yk.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Whole Corn",
              description: "Whole corn",
              pricePerBag: 19.75,
              pricePer20: 18.75,
              pricePer40: 18.25,
              url: "https://i.imgur.com/lq4V45H.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Whole Oats",
              description: "Whole oats",
              pricePerBag: 22.5,
              pricePer20: 21.5,
              pricePer40: 21.0,
              url: "https://i.imgur.com/0iE7KlC.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Whole Wheat",
              description: "Whole wheat",
              pricePerBag: 21.25,
              pricePer20: 20.25,
              pricePer40: 19.75,
              url: "https://i.imgur.com/dqLz2D5.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            // Add more records for the "StraightGrains" table as needed...
          ],
          {}
        );
      } else if (tableName === "SheepAndGoat") {
        await queryInterface.bulkInsert(
          tableName,
          [
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
            // Add more records for the "SheepAndGoat" table as needed...
          ],
          {}
        );
      } else if (tableName === "Rabbit") {
        await queryInterface.bulkInsert(
          tableName,
          [
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
            // Add more records for the "Rabbit" table as needed...
          ],
          {}
        );
      } else if (tableName === "Poultry") {
        await queryInterface.bulkInsert(
          tableName,
          [
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
            {
              name: "Cracked Corn",
              description: "Cracked corn",
              pricePerBag: 20.5,
              pricePer20: 19.5,
              pricePer40: 19.0,
              url: "https://i.imgur.com/kLkJCoB.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Fowl Power",
              description: "Mixed grain and pellet poultry feed",
              pricePerBag: 21.75,
              pricePer20: 20.75,
              pricePer40: 20.25,
              url: "https://i.imgur.com/7iykxzV.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Game Bird",
              description:
                "27% protein game bird feed (pellet and crumble available)",
              pricePerBag: 25.0,
              pricePer20: 24.0,
              pricePer40: 23.5,
              url: "https://i.imgur.com/kmZumHM.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Layer Ration Complete",
              description:
                "16% protein Egg Layer blend (pellet and crumble available)",
              pricePerBag: 21.0,
              pricePer20: 20.0,
              pricePer40: 19.5,
              url: "https://i.imgur.com/8ePJaRx.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Oyster Shell",
              description: "Crushed oyster shells",
              pricePerBag: 24.0,
              pricePer20: 23.0,
              pricePer40: 22.5,
              url: "https://i.imgur.com/KxzEO7M.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Two Way Scratch",
              description: "Cracked corn and barley",
              pricePerBag: 21.0,
              pricePer20: 20.0,
              pricePer40: 19.5,
              url: "https://i.imgur.com/X7BCqHD.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            // Add more records for the "Poultry" table as needed...
          ],
          {}
        );
      } else if (tableName === "Equine") {
        await queryInterface.bulkInsert(
          tableName,
          [
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
            {
              name: "Wet COB",
              description: "Rolled corn, oats and barley mixed with molasses",
              pricePerBag: 21.25,
              pricePer20: 20.25,
              pricePer40: 19.75,
              url: "https://i.imgur.com/p1rmRrQ.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Dry COB",
              description: "Rolled corn, oats and barley",
              pricePerBag: 21.25,
              pricePer20: 20.25,
              pricePer40: 19.75,
              url: "https://i.imgur.com/p1rmRrQ.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Mare and Foal",
              description: "Specialty supplement for nursing mares and foals",
              pricePerBag: 21.75,
              pricePer20: 20.75,
              pricePer40: 20.25,
              url: "https://i.imgur.com/vDuFJnP.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Mountaineer",
              description: "High performance trail horse grain",
              pricePerBag: 22.25,
              pricePer20: 21.25,
              pricePer40: 20.75,
              url: "https://i.imgur.com/P0i6SgJ.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Rice Bran",
              description: "Natural source of fiber and magnesium",
              pricePerBag: 25.0,
              pricePer20: 24.0,
              pricePer40: 23.5,
              url: "https://i.imgur.com/KxzEO7M.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Rolled Oats",
              description: "Rolled oats",
              pricePerBag: 23.0,
              pricePer20: 22.0,
              pricePer40: 21.5,
              url: "https://i.imgur.com/vqHiTH0.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Senior Horse",
              description: "Specialty feed for senior horses",
              pricePerBag: 23.25,
              pricePer20: 22.25,
              pricePer40: 21.75,
              url: "https://i.imgur.com/vtpECT4.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Sterling Horse",
              description: "For moderately active horses",
              pricePerBag: 21.75,
              pricePer20: 20.75,
              pricePer40: 20.25,
              url: "https://i.imgur.com/aqT8RWM.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Wheat Bran",
              description: "Natural source of fiber",
              pricePerBag: 20.0,
              pricePer20: 19.0,
              pricePer40: 18.5,
              url: "https://i.imgur.com/KxzEO7M.png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            // Add more records for the "Equine" table as needed...
          ],
          {}
        );
      } else if (tableName === "Cattle") {
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

    return Promise.resolve();
  },

  down: async (queryInterface, Sequelize) => {
    // Drop all the tables in reverse order
    const tableNames = [
      "Cattle",
      "Equine",
      "Poultry",
      "Rabbit",
      "SheepAndGoat",
      "StraightGrains",
      "Swine",
    ];

    for (const tableName of tableNames) {
      await queryInterface.dropTable(tableName);
    }

    return Promise.resolve();
  },
};
