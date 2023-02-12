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
        require:true
      },

      nacionalidad:[{type: Schema.Types.ObjectId, ref:"Pais", required:true}],
      
      ligas: [{type:Schema.Types.ObjectId, ref:"Liga", required: true}],

      equipos: [{type:Schema.Types.ObjectId, ref:"Equipo", required: true}],
  
      foto:{
        type:String,
        default:"",
      },
      role:{
        type:String,
        enum:["Usuario","Admin"]
      },
      jugadores:[{type: Schema.Types.ObjectId, ref:"jugador"}],

      edad:{
        type:String,
        requiere:true

      },
      
      titular:{
        type:Boolean,
        enum:["titular", "banca"]
      }
    },
    {
      // this second object adds extra properties: `createdAt` and `updatedAt`
      timestamps: true,
    }
  );
  
  const Jugador = model("Jugador", jugadorSchema);
  
  module.exports = Jugador;