const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {

    nombre:{
      type:String,
      required:true,
      trim:true
    },
    genero:{
      type:String,
      enum:["hombre","mujer","otro"]
    },
    nacionalidad:{
      type:String,
      required:true
    },

    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength:5,
      maxLength: 16
    },
    
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    foto:{
      type:String
    },
    role:{
      type:String,
      enum:["Usuario","Admin"],
      default:"Usuario"
    },
    jugadores:[{type: Schema.Types.ObjectId, ref:"Jugador"}],

  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
