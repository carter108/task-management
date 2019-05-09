import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("User", UserSchema);
