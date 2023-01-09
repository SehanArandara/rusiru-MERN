// assign dependencies to variables
const express = require("express");    // import expressJS
const mongoose = require("mongoose");   // import database supporter
const bodyParser =  require("body-parser");
const cors =  require("cors");
const dotenv =  require("dotenv");
const app = express();
require("dotenv").config();

mongoose.set("strictQuery",true);

const PORT = process.env.PORT || 8070; // assign port number to run the server  or operator is used 8070 OR any avaliable port

app.use(cors());
app.use(bodyParser.json());    // say that express app use cors and bodyParser


// connect data base
const URL = process.env.MONGODB_URL;    
/*
// configuartions for mongo DB
mongoose.connect(URL,{
   // useCreateIndex :  true,
   // useNewUrlParser :  true,
   // useUnifiedTopologyL : true,
  //  useFindAndModify : false
});*/
mongoose.connect(URL,);

/*connect method has two parameters they are 1. URL and 2. Options */ 

// create database connection
const  connection =  mongoose.connection;
// open the created connection 
connection.once('open',()=>{
    console.log("MongoDB connection success !");
});
/* 
  ******* ROuting ******* 
*/
// import created Student router file
const studentRouter =  require("./routes/Students");

// this use function is function in express js 
// we use this function to execute when we want to excetue the student file 
// localhost : 8070 / student ---- >  this will redirected to this file
app.use("/student",studentRouter);


 




// run app in PORT
app.listen(PORT,()=>{
    console.log("Server is UP  and running on port "+PORT);
});


 





