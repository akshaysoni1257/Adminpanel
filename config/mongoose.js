const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/adminpanel");

const db= mongoose.connection;

db.on('err',console.error.bind(console,"DB Not Connected"));

db.once('open',(err)=>{
    if(err)
    {
        console.log("DB Not Start");
        return false;
    }
    console.log("DB Is Start");
});

module.exports=db;

