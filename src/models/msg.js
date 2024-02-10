import mongoose, { Schema } from "mongoose";

const msgSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Msg = mongoose.models.Msg || mongoose.model("Msg", msgSchema);

export default Msg;

