const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, { useNewUrlParser: true })
  .then(() => {
    console.log("Connection secured!");
  })
  .catch((err) => {
    console.log(err);
    console.log("No connection");
  });
