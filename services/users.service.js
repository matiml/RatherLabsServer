const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class UsersService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.findOrCreate({
      where: { id: data.id },
      defaults: {
        id: data.id,
      },
    });
    return newUser;
  }

  async find() {
    const users = await models.User.findAll();
    if (!users) {
      throw boom.notFound();
    }

    return users;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }
}

module.exports = UsersService;
