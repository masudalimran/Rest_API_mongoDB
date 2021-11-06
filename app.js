const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv/config')
const port = 5500;
//Home Route import
const home_route = require("./routes/home");
const posts_route = require("./routes/posts");

//static assets
app.use(express.static("./public"));

// TODO Routes
app.use("/", home_route);
app.use("/posts", posts_route);

// ! Error Handle
app.get("*", (req, res) => {
  res.status(404).send(
    `
        <h1 style="text-align: center; color: red; text-decoration: underline">
            Resource Not Found !!
        </h1>
        `
  );
});

// ! Connect TO DB
mongoose.connect(
  process.env.DB_connection,
  () => console.log("Connected To Local DB")
);

// ? Server Start
app.listen(port, () => {
  console.log("Listening to port 5500...........");
});
