const express = require('express');
const app = express();
const { config } = require('./config/config.js');
const port = config.port || 3005;
const cors = require('cors');
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log('Mi port' + port);
});

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
