/* File: index.js
Name: Calum Bashow
Student ID# 301218933
Date: 28/09/2002
*/

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* Routes for basic pages. */
router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

router.get('/about', indexController.displayAboutPage);

router.get('/projects', indexController.displayProjectsPage);

router.get('/services', indexController.displayServicesPage);

router.get('/contact', indexController.displayContactPage);

//logon routes

router.get('/login', indexController.displayLoginPage );

router.post('/login', indexController.processLoginPage);

//register routes

router.get('/register', indexController.displayRegisterPage);

router.post('/register', indexController.processRegisterPage);

//logout routes

router.get('/logout', indexController.performLogout);
module.exports = router;
