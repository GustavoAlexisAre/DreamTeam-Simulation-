const { Schema, model } = require("mongoose");

const prediccionSchema = new Schema(
    {
  
      homeScore:{
        type:String,
        required:true,
        trim:true

    },
    awayScore:{
      type:String,
      required:true,
      trim:true
  },
  homeTeam:{
    type:String,
    required:true,
    trim:true

 },
  awayTeam:{
    type:String,
    required:true,
    trim:true
 },
 homeTeamLogo:{
  type:String,
  required:true,
  trim:true

},
awayTeamLogo:{
  type:String,
  required:true,
  trim:true
},

realHomeScore:{
  type:String,
  required:true,
  trim:true

},
realAwayScore:{
type:String,
required:true,
trim:true
},
winnerTeam:{
  type:String,
  required:true,
  trim:true

},
lostTeam:{
  type:String,
  required:true,
  trim:true
},
league:{
  type:String,
  required:true,
  trim:true

}
  },
    {
      // this second object adds extra properties: `createdAt` and `updatedAt`
      timestamps: true,
    }
  );
  
  const Prediccion = model("Prediccion", prediccionSchema);
  
  module.exports = Prediccion;