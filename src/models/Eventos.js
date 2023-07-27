import { Schema, model, models } from "mongoose";

const eventoSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true, //quita espacio si hay al inicio o final
      maxlength: [40, "Title must be lees than 40"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    delete: {
      type: Boolean, default: false
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    endDate:{type: String,
      required: [true, "End Date is required"]
    },
    user: { type:  Schema.Types.ObjectId, ref: "User", required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag',required: true }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Evento || model("Evento", eventoSchema);
