const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let userSchema = new Schema({
    date: String
}, { collection: "users" });

let User = mongoose.model('User', userSchema);

module.exports = User;