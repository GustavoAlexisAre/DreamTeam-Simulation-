const express = require('express');
const router = express.Router();
const {getFootballFixtures,getFootballFixturesById} = require('../services/futbolApi.service');
const Predicciones = require("../models/Prediccion.model");
const User = require("../models/User.model");


router.get('/userProfile',(req, res) => {
  User.findById(req.session.currentUser._id)
  .populate("Predicciones")
  .then(prediccionUser => {
    let puntosUser = 0 
for(i=0;i<prediccionUser.Predicciones.length; i++){
   
    if(prediccionUser.Predicciones[i].realAwayScore === null && prediccionUser.Predicciones[i].realHomeScore === null){
      continue
    }
    else if (prediccionUser.Predicciones[i].awayScore === prediccionUser.Predicciones[i].realAwayScore && prediccionUser.Predicciones[i].homeScore === prediccionUser.Predicciones[i].realHomeScore){
      puntosUser += 6
    }
    else if (prediccionUser.Predicciones[i].homeScore > prediccionUser.Predicciones[i].awayScore && prediccionUser.Predicciones[i].realHomeScore > prediccionUser.Predicciones[i].realAwayScore){
      puntosUser += 3
    }
    else if (prediccionUser.Predicciones[i].homeScore < prediccionUser.Predicciones[i].awayScore && prediccionUser.Predicciones[i].realHomeScore < prediccionUser.Predicciones[i].realAwayScore){
      puntosUser += 3
    }
    else if (prediccionUser.Predicciones[i].homeScore === prediccionUser.Predicciones[i].awayScore && prediccionUser.Predicciones[i].realHomeScore === prediccionUser.Predicciones[i].realAwayScore){
      puntosUser += 3
    }
  }
    res.render('user/user-profile',{ 
      userInSession: req.session.currentUser, 
      prediccion: prediccionUser.Predicciones,
      puntos: puntosUser
    });
  });
});

  

router.get('/userPrediction', (req, res) => {
    getFootballFixtures()
      .then(function(data) {
        res.render('user/user-prediction',{ userInSession: req.session.currentUser, fixture: data })
      })
      .catch(function(error) {
        console.error(error);
        res.render('error', { error: error });
      });
});



router.post("/user-prediction/:fixtureId", (req, res) => {

    const { fixtureId } = req.params;
    const {homeScore, awayScore} = req.body;
    
    if (homeScore === "" || awayScore === "" ) {
      res.status(400).render("user/user-prediction", {
        errorMessage:
          "All fields are mandatory. Please provide your Scores",
      });
  
      return;
    }
    if (homeScore.length > 2  && awayScore.length > 2) {
        res.status(400).render("user/user-prediction", {
          errorMessage: "Your Score needs to be at least 2 characters long.",
        });
        
        return
      }
     

      getFootballFixturesById(fixtureId)
      .then(datos => {
            const prediction = datos.map(dato => {
              return {
                homeTeam: dato.teams.home.name,
                awayTeam: dato.teams.away.name,
                homeTeamLogo:  dato.teams.home.logo,
                awayTeamLogo:  dato.teams.away.logo,
                realHomeScore: dato.goals.home,
                realAwayScore: dato.goals.away,
                league: dato.league.name,
                date: dato.league.season
              }
            })
            const data = {homeScore, awayScore, ...prediction[0]}
           
          Predicciones.create(data)
          .then(dbpost =>  {
          
            return User.findByIdAndUpdate(req.session.currentUser._id, { $push: { Predicciones: dbpost._id  } });})
          })
          .then(() => {
            res.redirect("/user/userProfile")
          })

      
})
console.log("secreto: https://www.youtube.com/watch?v=tMEWY4ZszUs")

module.exports = router