import express, { Application } from "express";
import cors from "cors";
import mongoose from "mongoose";
import user from "./router/userRoute"

const app: Application = express();
app.use(express.json())
.use(cors())

app.use("/api/v1", user)

const URL = "mongodb://0.0.0.0:27017";

app.listen(2211, () => {
  mongoose.connect(URL).then(() => {
    console.log("")
    console.log("ready to go!!!");
  });
});
