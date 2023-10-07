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
    ]

    module.exports = {
      up: async (queryInterface) => {
        return queryInterface.bulkInsert('Cattle', myDataData);
      },
    
      down: async (queryInterface, Sequelize) => {
        // Add commands to remove seeded data if needed
        // For example, you can use queryInterface.bulkDelete to delete all rows in the tables
        const tableNames = [
         
          "Cattle",
          // Add other table names as needed...
        ];
    
        for (const tableName of tableNames) {
          await queryInterface.bulkDelete(tableName, null, {});
        }
      }
    };
    

