const express= require('express');
const app=express();

const PORT= process.env.PORT || 3000;
const connectDB=require('./config/db')

connectDB();

app.listen(PORT, ()=>{
    console.log(`You are on the ${PORT} and I am ON`);
})