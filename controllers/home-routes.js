const router = require('express').Router();
const { } = require('../models/');
const { Service } = require('../models');


// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    res.render('homepage', { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/services', async (req, res) => {
  try {
    const dbServiceData = await Service.findAll({});

    const service = dbServiceData.map((service) => service.get({ plain: true }));
    console.log(`this is ${service}`);
    res.render('services', { service, loggedIn: req.session.loggedIn });
    // res.json(service);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/calendar', (req, res) => {
  try {
    res.render('calendar', { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
