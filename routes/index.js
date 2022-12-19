const express = require('express');

const routes = express.Router();

const registercontroller = require('../controller/registercontroller');

const dformcontroller = require('../controller/dformcontroller');

routes.use('/register',require('./register'));

routes.get('/',registercontroller.login);

routes.get('/dash',registercontroller.dash);

routes.get('/otp',registercontroller.otp);

routes.post('/loginData',registercontroller.loginData);

routes.post('/forgetpass',registercontroller.forgetpass);

routes.get('/logout',registercontroller.logout);

routes.get('/deletedata/:id',dformcontroller.deletedata);

// routes.post('/emaildata',dformcontroller.emaildata);



module.exports = routes;