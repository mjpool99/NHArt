const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let locationSchema = new Schema({
    url: String
}, { collection: "ShowLocation" });

let Location = mongoose.model('ShowLocation', locationSchema);

module.exports = Location;