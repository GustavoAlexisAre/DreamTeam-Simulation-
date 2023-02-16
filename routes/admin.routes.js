const express = require('express');
const router = express.Router();
const {getFootballFixtures,getFootballFixturesById} = require('../services/futbolApi.service');
const Predicciones = require("../models/Prediccion.model");
const User = require("../models/User.model");




router.get("/dashboard", (req, res) => {
res.render("admin/dashboard")
})



module.exports = router