const { Sequelize } = require('sequelize');

const commonConfig = {
  seederStorage: 'sequelize',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  define: {
    schema: process.env.SCHEMA
  }
};

module.exports = {
  development: {
    storage: './db/dev.db',
    dialect: 'sqlite',
    logQueryParameters: true,
    typeValidation: true,
    ...commonConfig
  },
  production: {
    dialect: 'postgres',
    host: 'dpg-ckg3f4uct0pc73a9i6qg-a',
    port: 5432,
    username: 'redneck_user',
    password: process.env.PASSWORD, // Add your password here if applicable
    database: 'RedNeck',
    ...commonConfig
  }
};

