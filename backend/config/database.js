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
    use_env_variable: 'postgres://redneck_user:eIwDHnkkMVF6CgbqySihyQkaj5fhb0eW@dpg-ckg3f4uct0pc73a9i6qg-a/redneck',
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
