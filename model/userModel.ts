import mongoose from "mongoose";

interface iUser {
  userName: string;
  pix: string;
}

interface iUserdata extends iUser, mongoose.Document {}

const userModel = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    pix: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);


export default mongoose.model<iUserdata>("users", userModel)