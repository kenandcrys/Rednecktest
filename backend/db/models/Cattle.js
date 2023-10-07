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
modelName: "Cattle", // This is the important change. We are now explicitly specifying the table name and telling Sequelize not to pluralize it.
freezeTableName: true,
}
);

// Sync the database schema with Sequelize
sequelize.sync();

// Create a new Cattle record
const cattle = new Cattle({
name: '16% Dairy',
description: '16% protein dairy cow feed',
pricePerBag: 20.0,
pricePer20: 19.0,
pricePer40: 18.5,
url: 'https://i.imgur.com/sZwrxu6.png',
});

// Insert the new Cattle record into the database
cattle.save();

return Cattle;
};