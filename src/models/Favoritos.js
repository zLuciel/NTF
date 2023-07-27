import { Schema, model, models } from "mongoose";

const favoritoSchema = new Schema({
    usuario: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    evento: {
      type: Schema.Types.ObjectId,
      ref: 'Evento',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey:false
  });

  export default models.Favorito || model('Favorito', favoritoSchema);