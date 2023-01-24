const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const withAuth = require('../../utils/auth');
router.use('/users', userRoutes);

const serviceRoutes = require('./service-routes.js');
router.use('/services', withAuth, serviceRoutes);

const appointmentRoutes = require('./appointment-routes.js');
router.use('/appointments', withAuth, appointmentRoutes);

module.exports = router;
