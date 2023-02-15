const express = require('express');
const router = express.Router();
const getFootballFixtures = require('../services/futbolApi.service');
const Predicciones = require("../models/Prediccion.model");


router.get('/userProfile',(req, res) => res.render('user/user-profile',{ userInSession: req.session.currentUser }));

router.get('/userPrediction', (req, res) => {
    getFootballFixtures()
      .then(function(data) {
        console.log(data)
        res.render('user/user-prediction',{ userInSession: req.session.currentUser, fixture: data })
        
      })
      .catch(function(error) {
        console.error(error);
        res.render('error', { error: error });
      });
});



router.post("/userPrediction", (req, res) => {

  
    const {homeScore, awayScore} = req.body;
    const {homeTeam, awayTeam, homeTeamLogo, awayTeamLogo, realHomeScore, realAwayScore, winnerTeam, lostTeam, League } =req.params
    
  
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

      if(teams.home.winner === true){
        winnerTeam = teams.home.name
        lostTeam = teams.away.name
        return Predicciones.create({homeScore, awayScore, homeTeam, awayTeam, homeTeamLogo, awayTeamLogo, realHomeScore, realAwayScore, winnerTeam, lostTeam, League })
      }
      else if(teams.home.winner === false){
        winnerTeam = teams.away.name
        lostTeam = teams.team.name
        return Predicciones.create({homeScore, awayScore, homeTeam, awayTeam, homeTeamLogo, awayTeamLogo, realHomeScore, realAwayScore, winnerTeam, lostTeam, League })
      }
      else{
        return Predicciones.create({homeScore, awayScore, homeTeam, awayTeam, homeTeamLogo, awayTeamLogo, realHomeScore, realAwayScore, winnerTeam, lostTeam, League })
      }
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