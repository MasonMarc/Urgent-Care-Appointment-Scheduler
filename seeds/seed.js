const sequelize = require('../config/connection');
const userData = require('./user_seeds.json');
const User = require('../models/User');
const serviceData = require('./service_seed.json');
const Service = require('../models/service');
const appointmentData = require('./appointment_seed.json');
const Appointment = require('../models/appointment');



const init = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Service.bulkCreate(serviceData, {
    individualHooks: true,
    returning: true,
  });
  await Appointment.bulkCreate(appointmentData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

init();
