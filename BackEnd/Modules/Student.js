const mongoose = require('mongoose');    // we have to import this because we need to connect with the dataBase

const Schema = mongoose.Schema;    //  this will make a schema  -  schema means table name

// create new Schema model for student
const studentSchema =  new Schema({
    /*
        attribute : {
            type : String , ---- >  here we give the data type of the attribute
            required : true,  ---- >  filled mustbe filled
        },
    */
    name :{
        type :  String,
        required : true,
    },

    age : {
        type : Number,
        required : true,
    },

    gender : {
        type : String,
        required :  true
    }
     
}) 

// create table or collection we have to do followings
const Student = mongoose.model("Student",studentSchema);    // parameter 01 -  collection name  paramter 2 -  schema name
// in here in Student collection created in mongoDB as  Studnet --- > 

// we must export this module if we dont we cant do routes properly
module.exports =  Student;
