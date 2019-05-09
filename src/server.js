require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import router from "routes";
import { errorHandler } from "middleware";
import mongoose from "mongoose";
const app = express();

app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use("/", router);
app.use(errorHandler);

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected");
  })
  .catch(err => {
    console.log("Connect to database failed", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
