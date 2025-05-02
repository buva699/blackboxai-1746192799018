const { Sequelize } = require('sequelize');

// Initialize Sequelize with SQLite for simplicity
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, connectDB };
