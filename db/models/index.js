const { User, UserSchema } = require('./user.model');
const { Deposit, DepositSchema } = require('./deposit.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Deposit.init(DepositSchema, Deposit.config(sequelize));

  User.associate(sequelize.models);
  Deposit.associate(sequelize.models);
}

module.exports = setupModels;
