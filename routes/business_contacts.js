//bringing everything in
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our model
let Business_contacts = require('../models/business_contacts');
//get route for our list
router.get('/',(req, res, next) =>{
    Business_contacts.find((err, BusinessContactList) =>{
        if(err){
            return console.error(err)
        }
        else {
          res.render('business_contacts', {title : "Business Contacts List", BusinessContactList: BusinessContactList})
        }
    })
})

module.exports = router;