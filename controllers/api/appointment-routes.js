const router = require('express').Router();
const { Appointment } = require('../../models');

router.get('/', (req, res) => {
  Appointment.findAll().then((appointmentData) => {
    res.json(appointmentData);
  });
});

router.post('/', async (req, res) => {
  try {
    const newAppointment = await Appointment.create({
      title: req.body.title,
      start: req.body.start,
    });

    req.session.save(() => {
      req.session.appointmentId = newAppointment.id;
      req.session.start = newAppointment.start;
      req.session.loggedIn = true;

      res.json(newAppointment);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
