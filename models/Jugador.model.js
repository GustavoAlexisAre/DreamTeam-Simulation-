const { Schema, model } = require("mongoose");

const jugadorSchema = new Schema(
    {
  
      nombre:{
        type:String,
        required:true,
        trim:true
      },
      posicion:{
        type:String,
        enum:["Delantero","Medio","Defensa","Portero"],
        required:true
      },

      nacionalidad:{
        type:String,
        required:true
      },
      
      ligas: [{type:Schema.Types.ObjectId, ref:"Liga", required: true}],

      equipos: [{type:Schema.Types.ObjectId, ref:"Equipo", required: true}],
  
      foto:{
        type:String,
        default:"",
      },

      edad:{
        type:Date,
        required:true

      },
      
      titular:Boolean
    },
    {
      // this second object adds extra properties: `createdAt` and `updatedAt`
      timestamps: true,
    }
  );
  
  const Jugador = model("Jugador", jugadorSchema);
  
  module.exports = Jugador;