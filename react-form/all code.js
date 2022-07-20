// Index
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./router.js";
// import { errorMiddleware } from "./middleware/errorMiddleware.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.port || 300;
app.use("/goals", router);
app.use("users", route);
app.listen(port, () => console.log(`server is running on port ${port}`));

mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => console.log("MongoDB CONNECTED"))
  .catch((err) => console.log(err.message));
