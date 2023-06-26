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
      type: String,
      required: [true, "Price is required"],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    startDate:{type: String,
      required: [true, "Start Date is required"]
    },
    endDate:{type: String,
      required: [true, "End Date is required"]
    },
    //tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
    user: { type:  Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Evento || model("Evento", eventoSchema);
