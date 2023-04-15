const fs = require('fs');

module.exports = {
  development: {
    username: 'postgres',
    password: 'your_password',
    database: 'notes_db',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
};