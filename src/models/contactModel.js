const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let contactSchema = new Schema({
    Phone: String,
    Email: String
}, { collection: "ContactInfo" });

let Contact = mongoose.model('ContactInfo', contactSchema);

module.exports = Contact;