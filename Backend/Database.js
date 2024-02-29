const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:admin@zerli.shnfigq.mongodb.net/?retryWrites=true&w=majority&appName=zerli";

const Database = () => {
    mongoose.connect(uri)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.log('Error connecting to MongoDB');
            console.log(error);
        });
}

module.exports = Database;