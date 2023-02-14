const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const ligaSchema = new Schema(
  {

    nombre:{
      type:String,
      required:true,
      trim:true
    },
    
    temporada:{
      type:String,
      required:true
    },

    ronda:{
      type:String,
      required:true
    },

    logo:{
      type:String,
      required:true
    },
    
    equipos: [{type:Schema.Types.ObjectId, ref:"Equipo", required: true}]
});

const Liga = model("Liga", ligaSchema);

module.exports = Liga;
