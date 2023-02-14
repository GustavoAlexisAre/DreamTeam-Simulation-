const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const equipoSchema = new Schema(
  {

    home:{
      type:String,
      required:true,
      trim:true
    },
    
    away:{
      type:String,
      required:true
    },

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

    homeLogo:{
      type:String,
      required:true,
      trim:true
    },

    awayLogo:{
      type:String,
      required:true,
      trim:true
    }
});

const Equipo = model("Equipo", equipoSchema);

module.exports = Equipo;
