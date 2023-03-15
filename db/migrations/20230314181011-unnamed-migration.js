const { UserSchema, USER_TABLE } = require('../models/user.model');
const { DepositSchema, DEPOSIT_TABLE } = require('../models/deposit.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(DEPOSIT_TABLE, DepositSchema);
  },

  down: async (queryInterface) => {},
};
