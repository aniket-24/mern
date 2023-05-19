const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home from auth!");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.json({ message: req.body });
});

module.exports = router;
