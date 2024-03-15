const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const cors = require("cors");
const Authenticate = require("../middleware/adminAuth");

require("../db/conn");
const Admin = require("../model/adminSchema");

router.use(cors());

router.get("/", (req, res) => {
  res.send("This is Home page by router");
});

// Signin up API

router.post("/signup", async (req, res) => {
  const { name, email, number, password, cpassword } = req.body;

  if (!name || !email || !number || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill in all fields" });
  }

  try {
    const adminExist = await Admin.findOne({ email: email });

    if (adminExist) {
      return res.status(422).json({ error: "Email Already Exists" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "Passwords do not match" });
    } else {
      const newAdmin = new Admin({ name, email, number, password, cpassword });

      await newAdmin.save();

      res.status(201).json({ message: "Registration Successful" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Signin API

router.post("/signin", async (req, res) => {
  try {
    let tokan;
    const { email, password } = req.body;

    if (!email | !password) {
      return res.status(400).json({ error: "Plase Fill the all Fillde" });
    }

    const AdminLogin = await Admin.findOne({ email: email });

    if (AdminLogin) {
      const AdminPassword = await bcrypt.compare(password, AdminLogin.password);

      // JWT tokan
      tokan = await AdminLogin.generateAuthToken();
      console.log(tokan);

      // store tokan in cookies
      res.cookie("adminTokan", tokan, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!AdminPassword) {
        res.status(400).json({ error: "inviald Credentials" });
      } else {
        res.json({ error: "Admin Signin Successfuly" });
      }
    } else {
      res.status(400).json({ error: "inviald Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/dashbord", Authenticate, (req, res) => {
  console.log("This is home page");
  res.send(req.rootAdmin);
});

// Logout API
router.get("/logout", async (req, res) => {
  try {
    res.clearCookie("jwtokan", { path: "/" });
    res.clearCookie("adminToken", { path: "/" });
    res.status(200).send("User Logout");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
