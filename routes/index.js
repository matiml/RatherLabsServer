const usersRouter = require('./users');
const depositsRouter = require('./desposits');

function routerApi(app) {
  app.use('/users', usersRouter);
  app.use('/deposits', depositsRouter);
}

module.exports = routerApi;
