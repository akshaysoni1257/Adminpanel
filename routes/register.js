const express = require('express');

const routes = express.Router();

const registercontroller = require('../controller/registercontroller');

const dformcontroller = require('../controller/dformcontroller');


routes.get('/',registercontroller.index);


// signup
routes.post('/insertdata',registercontroller.insertdata); 


// dashboard form 
routes.post('/finsertdata',dformcontroller.finsertdata);


// View Data
routes.get('/viewdata',dformcontroller.viewdata);
module.exports=routes;