const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const ligaSchema = new Schema(
  {

    nombre:{
      type:String,
      required:true,
      trim:true
    },
    
    region:[{type: Schema.Types.ObjectId, ref:"Pais"}],

    equipos: [{type:Schema.Types.ObjectId, ref:"Equipo", required: true}]
});

const Liga = model("Liga", ligaSchema);

module.exports = Liga;
