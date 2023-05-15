const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dontenv = require("dotenv");

const DB =
  "mongodb+srv://Aniket:aniket24102001@cluster0.242hqmf.mongodb.net/mern?retryWrites=true&w=majority";

mongoose
  .connect(DB, { useNewUrlParser: true })
  .then(() => {
    console.log("Connection secured!");
  })
  .catch((err) => {
    console.log(err);
    console.log("No connection");
  });

const middleware = (req, res, next) => {
  console.log("middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("Home!");
});

app.get("/about", middleware, (req, res) => {
  res.send("About!");
});

app.get("/signin", (req, res) => {
  res.send("Signin!");
});

app.get("/signup", (req, res) => {
  res.send("Signup!");
});

app.listen(3000, () => {
  console.log("Server is running...");
});
