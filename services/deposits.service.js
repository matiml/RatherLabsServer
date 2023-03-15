const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class DepositsService {
  constructor() {}

  async create(data) {
    const newDeposit = await models.Deposit.create(data);
    return newDeposit;
  }

  async find() {
    const deposits = await models.Deposit.findAll();
    return deposits;
  }

  async findOne(id) {
    const deposit = await models.Deposit.findByPk(id);
    if (!deposit) throw boom.notFound('product not found');
    return deposit;
  }

  async findByPool(userId, pool) {
    const poolDeposits = await models.Deposit.findAll({
      where: {
        pool: pool,
        userId: userId,
      },
    });
    if (!poolDeposits) throw boom.notFound('product not found');
    return poolDeposits;
  }
}

module.exports = DepositsService;
