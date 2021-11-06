const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
require('dotenv/config')
const port = 5500;


//Route import
const home_route = require("./routes/home");
const posts_route = require("./routes/posts");
const error_route = require("./routes/404");


//static assets
app.use(express.static("./public"));
app.use(bodyParser.json());

// TODO Routes
app.use("/", home_route);
app.use("/posts", posts_route);
app.use("/error", error_route);
// ! ERROR HANDLE
app.use("*", error_route);


// ! Connect TO DB
mongoose.connect(
  process.env.DB_connection,
  () => console.log("Connected To Local DB")
);


// ? Server Start
app.listen(port, () => {
  console.log("Listening to port 5500...........");
});
