const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dontenv = require("dotenv");

dontenv.config({ path: "./config.env" });

require("./db/conn");

app.use(express.json());

app.use(require("./router/auth"));

const PORT = process.env.PORT;

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

app.get("/contact", (req, res) => {
  res.cookie("test", "Aniket");
  res.send("Contact!");
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
