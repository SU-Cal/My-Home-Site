//bringing everything in
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our model
let Contact = require('../models/business_contacts');

//get route for our business contact list, read operation
let contactController = require('../controllers/business_contacts')

//display contacts list
router.get('/', contactController.displayContactList)

/*Get route for displaying add page - create operation */
router.get('/add', contactController.displayAddPage)

/*Get route for processing add page - create operation */
router.post('/add', contactController.processAddPage)

/*Get route for displaying edit page - update operation */
router.get('/edit/:id', contactController.displayEditPage)

/*Get route for processing edit page - update operation */
router.post('/edit/:id', contactController.processEditPage)

/*Get route for deletion - delete operation */
router.get('/delete/:id', contactController.processDeletePage)

module.exports = router;