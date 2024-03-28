const dotenv = require("dotenv");
dotenv.config({ path: './.env.local' });

const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');

require('./db/conn');

//read json file
app.use(express.json());

// cookie-parser middleware
app.use(cookieParser()); 

// Rout Link
app.use(require('./route/adminRoute'));
app.use(require('./route/userRoute'));

const PORT = process.env.PORT;


app.listen(PORT, () => {
  console.log(`server is runing at port ${PORT}`);
});