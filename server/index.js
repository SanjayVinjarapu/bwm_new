const express = require('express');
const config= require('./config/dev');
const mongoose= require('mongoose');
const Rental = require('./models/rentalschema');
const rentalRouter=require("./routes/rentals");
const FakeDB = require('./fakDb');
const app =express();

mongoose.connect(config.Db_URI,{ useNewUrlParser: true , useUnifiedTopology: true}).then(()=>{
    const db=new FakeDB();
    db.seedDb();
});
app.use('/api/v1/rentals',rentalRouter);
const PORT = process.env.PORT || 3001;
app.listen(PORT,function(){
    console.log("Hello Node");
});