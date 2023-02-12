const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const paisSchema = new Schema(
  {

    nombre:{
      type:String,
      required:true,
      trim:true
    },
    region:[{type: Schema.Types.ObjectId, ref:"Pais"}],
  })

const Pais = model("Pais", paisSchema);

module.exports = Pais;
