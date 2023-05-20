const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Home from auth!");
});

// by promise

// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res
//       .status(402)
//       .json({ error: "PLease filled the fields properly!" });
//   }
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "User already exist" });
//       }
//       const user = new User({ name, email, phone, work, password, cpassword });
//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "User registered successfully" });
//         })
//         .catch((err) => {
//           res.status(500).json({ error: "Failed to register" });
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// by async and await
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res
      .status(402)
      .json({ error: "PLease filled the fields properly!" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "User already exist" });
    }
    const user = new User({ name, email, phone, work, password, cpassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please filled all fields" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) res.status(200).json({ message: "User sigin successfully" });
    else res.status(400).json({ error: "User not exist" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
