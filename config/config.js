require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3005,
  db_url: process.env.URL,
};

module.exports = { config };
