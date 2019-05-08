require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./routes");

const app = express();

app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use("/", router);
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

console.log("db", dbConfig.url);

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected");
  })
  .catch(err => {
    console.log("Connect to database failed");
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
