const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const equipoSchema = new Schema(
  {

    nombre:{
      type:String,
      required:true,
      trim:true
    },
    
    nacionalidad:{
      type:String,
      require:true
    },

    ligas: [{type:Schema.Types.ObjectId, ref:"Liga", required: true}]
});

const Equipo = model("Liga", equipoSchema);

module.exports = Equipo;
