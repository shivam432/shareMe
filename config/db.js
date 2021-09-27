require('dotenv').config();
const mongoose = require('mongoose');
const connection = mongoose.connection;
function connectDB() {
    // Database connection 🥳
    mongoose.connect(process.env.MONGO_CONNECTION_URL, function(err,db){
        if(err){
            console.log('Connection failed ☹️☹️☹️☹️. Error: ', err);
        }else{
            console.log('Database connected 🥳🥳🥳🥳');
        }
    });
    
    
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;