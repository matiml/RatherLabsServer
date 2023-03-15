const { Sequelize } = require('sequelize');
const setupModels = require('./../db/models');
const { config } = require('./../config/config');

const URI = config.db_url;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  dialectOptions: {},
});

setupModels(sequelize);

module.exports = sequelize;
