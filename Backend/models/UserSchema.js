const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String, required: true, unique: 'Email already used!'
    },
    password: {
        type: String, required: true
    }
});


module.exports = mongoose.model('mortgageUsers', UserSchema);