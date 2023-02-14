const express = require('express');
const router = express.Router();
const getFootballFixtures = require('../services/futbolApi.service');

router.get('/', function(req, res) {
  getFootballFixtures()
    .then(function(data) {
      console.log(data)
    })
    .catch(function(error) {
      console.error(error);
      res.render('error', { error: error });
    });
});
