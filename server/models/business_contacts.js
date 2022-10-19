let mongoose = require('mongoose');

//create a model class
let businessContactModel = mongoose.Schema({
    name : String,
    number : String,
    email : String

    },
    {
        collection: "businessContacts"
});

module.exports = mongoose.model('Business Contact', businessContactModel)