import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: String, //Clerk ID of the sender
      ref: "User",
      required: true,
    },
    receiverId: {
      type: String, //Clerk ID of the receiver
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Message = mongoose.model("Message", messageSchema);

// Exporting the Message model for use in other parts of the application
