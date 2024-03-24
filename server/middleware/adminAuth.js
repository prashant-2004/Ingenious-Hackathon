// middleware/adminAuth.js

const jwt = require("jsonwebtoken");
const Admin = require("../model/adminSchema");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.adminToken;
    if (!token) {
      throw new Error("No token, authorization denied");
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const admin = await Admin.findOne({
      _id: decoded._id,
      "tokans.tokan": token,
    });

    if (!admin) {
      throw new Error();
    }

    req.token = token;
    req.rootAdmin = admin;
    next();
  } catch (error) {
    res.status(401).json({ error: "Please authenticate as admin" });
  }
};

module.exports = Authenticate;
