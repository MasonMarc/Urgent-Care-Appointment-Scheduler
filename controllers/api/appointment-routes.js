const router = require('express').Router();
const { Appointment } = require('../../models');

router.get('/', (req, res) => {
  appointment.findAll().then((appointmentData) => {
    res.json(appointmentData);
  });
});

router.post('/', async (req, res) => {
  try {
    const newAppointment = await Appointment.create({
    //   username: req.body.username,
    //   password: req.body.password,
    });
      } catch (err) {
    res.status(500).json(err);
  }
});

//     req.session.save(() => {
//       req.session.userId = newUser.id;
//       req.session.username = newUser.username;
//       req.session.loggedIn = true;

      res.json(newAppointment);
//     });


module.exports = router;
