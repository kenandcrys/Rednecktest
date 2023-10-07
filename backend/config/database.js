// backend/config/database.js
const config = require('./index');

module.exports = {
  development: {
    storage: './db/dev.db',
    dialect: "sqlite",
    seederStorage: "sequelize",
    logQueryParameters: true,
    typeValidation: true
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    password:'6EoewyZpN5VOJnkLu43DHBdbhzNaOtf1',
    username:"dev_cbzd_user",
    database:"dev_cbzd",
    port: 5432,
    hostName:"dpg-ckgnbe212bvs7382r170-a",
    dialect: 'postgres',
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
  }
};
