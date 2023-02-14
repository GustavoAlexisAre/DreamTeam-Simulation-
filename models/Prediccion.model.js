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

  },
    {
      // this second object adds extra properties: `createdAt` and `updatedAt`
      timestamps: true,
    }
  );
  
  const Prediccion = model("Prediccion", prediccionSchema);
  
  module.exports = Prediccion;