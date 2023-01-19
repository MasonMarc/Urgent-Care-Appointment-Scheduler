const sequelize = require('../config/connection');
const userData = require('./user_seeds.json');
const User = require('../models/User');



const init = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

init();
