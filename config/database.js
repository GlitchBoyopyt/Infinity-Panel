const { Sequelize } = require('sequelize');

// Database connection configuration
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost', // Change to your database host
  dialect: 'mysql',  // Change to 'postgres', 'sqlite', 'mssql' if needed
  logging: false,    // Disable logging (optional)
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully!');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;
