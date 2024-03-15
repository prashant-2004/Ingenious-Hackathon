const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true
  }).then(() => {
    console.log('Connection Succesful');
  }).catch((err) => console.log('Connection failed'));