const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const paisSchema = new Schema(
  {

    nombre:{
      type:String,
      required:true,
      trim:true
    },
    region:{
     type:Boolean,
     enum:['Asia', 'América', 'África', 'Europa',  'Oceanía']
    },
  })

const Pais = model("Pais", paisSchema);

module.exports = Pais;
