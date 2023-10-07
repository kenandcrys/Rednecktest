const { sequelize } = require('./db/models');

sequelize.showAllSchemas().then(async (data) => {
  if (!data.includes(process.env.SCHEMA)) {
    await sequelize.createSchema(process.env.SCHEMA)
  }
});
