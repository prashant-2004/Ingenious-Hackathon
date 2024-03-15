const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');

dotenv.config({ path: './config.env' });
require('./db/conn');

//read json file
app.use(express.json());

// cookie-parser middleware
app.use(cookieParser()); 

// Rout Link
app.use(require('./route/adminRoute'));

const PORT = process.env.PORT;


app.listen(PORT, () => {
  console.log(`server is runing at port ${PORT}`);
});