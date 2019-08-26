var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    score: Number
});
 
module.exports = mongoose.model('User', userSchema);