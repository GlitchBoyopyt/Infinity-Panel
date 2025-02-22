const sequelize = require('./config/database');

sequelize.sync({ force: false }) // Set to `true` to drop and recreate tables
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
