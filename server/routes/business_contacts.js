//bringing everything in
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our model
let Contact = require('../models/business_contacts');

//get route for our business contact list, read operation
router.get('/',(req, res, next) =>{
    Contact.find((err, contactList) =>{
        if(err){
            return console.error(err)
        }
        else {
          res.render('business_contacts/list', {title : "Business Contacts List", ContactList: contactList})
        }
    })
})

/*Get route for displaying add page - create operation */
router.get('/add', (req, res, next) =>{
    res.render('business_contacts/add', {title : "Business Contacts Add"})
});
/*Get route for processing add page - create operation */
router.post('/add', (req, res, next) =>{
    let newContact = Contact({
        "name" : req.body.name,
        "number" : req.body.number,
        "email"  : req.body.email
    });
    Contact.create(newContact, (err, Contact) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
        res.redirect('/business_contacts');
        }
    });
});

/*Get route for displaying edit page - update operation */
router.get('/edit/:id', (req, res, next) =>{
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('business_contacts/edit', {title: 'Edit Contact', contact : contactToEdit})
        }
    });


});
/*Get route for processing edit page - update operation */
router.post('/edit/:id', (req, res, next) =>{
    let id = req.params.id;

    let updatedContact = Contact({
        "_id" : id,
        "name" : req.body.name,
        "number" : req.body.number,
        "email"  : req.body.email
});

    Contact.updateOne({id: id}, updatedContact,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/business_contacts');
        }
    });
});

/*Get route for deletion - delete operation */
router.get('/delete/:id', (req, res, next) =>{
    let id = req.params.id;

    Contact.remove({_id : id}, (err) => {
        if(err)
    {
        console.log(err);
        res.end(err);
    }
    else{
        res.redirect('/business_contacts');
    }
    });
});


module.exports = router;