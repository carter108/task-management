import mongoose from "mongoose";

const TaskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true
    },
    status: {
      type: String,
      trim: true,
      required: true
    },
    order_number: {
      type: Number,
      default: 0,
      required: true
    },
    owner: {
      type: "ObjectId",
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Task", TaskSchema);
