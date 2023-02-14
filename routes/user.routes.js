const express = require('express');
const router = express.Router();
const getFootballFixtures = require('../services/futbolApi.service');
const Predicciones = require("../models/Prediccion.model");
const Equipos = require("../models/Equipo.model");
const Ligas = require("../models/Liga.model");

router.get('/userProfile',(req, res) => res.render('user/user-profile',{ userInSession: req.session.currentUser }));

router.get('/userPrediction', (req, res) => {
    res.render('user/user-prediction',{ userInSession: req.session.currentUser })
    getFootballFixtures()
      .then(function(data) {
        return data
      })
      .catch(function(error) {
        console.error(error);
        res.render('error', { error: error });
      });
});

router.post("/userPrediction", (req, res) => {
    const {homeScore, awayScore } = req.body;
  
    // Check that username, email, and password are provided
    if (homeScore === "" || awayScore === "" ) {
      res.status(400).render("user/user-preidction", {
        errorMessage:
          "All fields are mandatory. Please provide your Scores",
      });
  
      return;
    }
    if (homeScore.length < 3  && awayScore < 3) {
        res.status(400).render("auth/signup", {
          errorMessage: "Your Score needs to be at least 2 characters long.",
        });
        
        return
      }
      console.log(req.body)
      return Predicciones.create({homeScore, awayScore})
})

// router.get('/userPrediction', function(req, res) {
//     getFootballFixtures
//       .then(function(data) {
//         console.log(data)
//       })
//       .catch(function(error) {
//         console.error(error);
//         res.render('error', { error: error });
//       });
//   });

module.exports = router