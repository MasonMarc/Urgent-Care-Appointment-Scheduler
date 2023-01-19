const router = require('express').Router();
const { Service } = require('../../models');

  router.get('/services', async (req, res) => {
    try {
      const dbServiceData = await Service.findAll(req.body);
  
      const service = dbServiceData.get({ plain: true });
      res.render('services', { service });
      console.log(service);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



  module.exports = router;