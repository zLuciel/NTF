import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    uid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    picture: { type: String, required: true, unique: true },
    description:{ type: String},
    portada: { type: String},
    redes: { type: Array},
    seguidores :{ type: String, default: "0"},
    siguiendo:{ type: String, default: "0"},
    active: {type: Boolean, unique: true, default: false},
    favoritos: [{
      type: Schema.Types.ObjectId,
      ref: 'Favorito',
    }],
},
{
  timestamps: true,
  versionKey:false
})


export default models.User || model('User', userSchema);