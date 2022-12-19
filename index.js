
// Declare Express
const express = require ('express');

// Port Size
const port = 8080;

// Express Get 
const app = express();

// Path Declare
const path = require('path');

// MOngoose Declare
const db= require('../Adminpanel/config/mongoose');

// Cookie Parser
const express_session = require('express-session');
const cookieParser = require('cookie-parser');

app.use(express_session({
    name : "cjgx",
    secret : "hgzcnz",
    resave : false,
    saveUninitialized : false,
    cookie : {
        maxAge : 1000*60*60*24
    }
}));
app.use(express_session());
app.use(cookieParser());

// Express Urlencoded
app.use(express.urlencoded());

// Use Public Directory
app.use('/public',express.static(path.join(__dirname,'public')));
app.set('view engine','ejs'); 
app.set('views',path.join(__dirname,'views'));

app.use('/',require('./routes'));


// Create Server Connections
app.listen(port,(err)=>{
    if(err)
    {
        console.log("Server Not Start");
        return false;
    }
    console.log("Server Start="+port);
});