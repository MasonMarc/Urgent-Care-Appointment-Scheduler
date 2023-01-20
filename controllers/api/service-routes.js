const router = require('express').Router();
const { Service } = require('../../models');

router.get('/', (req, res) => {
  Service.findAll().then((serviceData) => {
    res.json(serviceData);
  });
});



  module.exports = router;