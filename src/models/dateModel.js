const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let dateSchema = new Schema({
    date: String
}, { collection: "ShowDates" });

let Show = mongoose.model('ShowDate', dateSchema);

module.exports = Show;