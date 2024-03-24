const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const cors = require("cors");
const Authenticate = require("../middleware/adminAuth");

require("../db/conn");
const Admin = require("../model/adminSchema");

router.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

router.get("/", (req, res) => {
  res.send("This is Home page by router");
});

// Signin up API

router.post("/admin-signup", async (req, res) => {
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
router.post("/admin-signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill in all fields" });
    }

    const adminLogin = await Admin.findOne({ email: email });

    if (adminLogin) {
      const adminPassword = await bcrypt.compare(password, adminLogin.password);

      if (!adminPassword) {
        return res.status(400).json({ error: "Invalid Credentials" });
      }

      // JWT token
      token = await adminLogin.generateAuthToken();
      console.log("Admin token: " + token);

      // store token in cookies
      res.cookie("adminToken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      res.json({ message: "Admin Signin Successful" });
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/admin-dashboard", Authenticate, (req, res) => {
  console.log("This is home page");
  res.send(req.rootAdmin);
});

// Logout API
router.get("/admin-logout", async (req, res) => {
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
