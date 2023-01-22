const router = require('express').Router();
const userRoutes = require('./user-routes.js');
router.use('/users', userRoutes);

const serviceRoutes = require('./service-routes.js');
router.use('/services', serviceRoutes);

const appointmentRoutes = require('./appointment-routes.js');
router.use('/appointments', appointmentRoutes);

module.exports = router;
