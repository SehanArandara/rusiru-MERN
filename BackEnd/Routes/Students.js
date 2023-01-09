const router =  require("express").Router();  //  import Router function in express js file
let Student =  require("../models/Student");  // import student Model 
/*const bodyParser =  require("body-parser");
router.use(bodyParser.json());
*/

 // **************implement the route for CREATE crud operation *************************
 // ----- >  thats means localHost : 8070 /  Studnet /  add   if we call this link belowe insert body will execute
 router.route("/add").post((req,res)=>{
    // get requested body from the front end
    const name = req.body.name;
    const age =  Number(req.body.age);    //  cast string in to the number data type 
    const gender =  req.body.gender;

    // we have to pass data by using a object so that we have to create a new object from studnet class
    const newStudent =  new Student({
        name,
        age,
        gender
    })

    // we have to send this javascript object to the database for that we use .save() function
    // .then() function will check the object is passing is DONE correctly 
    //. catch() this will act as else and .then() is act as a if() part  
    // exception handling for CREATE crud and pass that new object to the dataBase is done in here actually
    newStudent.save().then(()=>{
        res.json("Student ADDED");     //  pass a message to the front end 
    }).catch((err)=>{
        console.log(err);
    })
    

 });     


//********************* Implement the route for the READ in CRUD operation ******* (Get all records)
router.route("/").get((req,res)=>{     //  get http method is used to get the data from the database

    Student.find().then((students)=>{   //  student means that model we created and import from above find() function is to get all the students data from the DB
        res.json(students)    // send response to frontEnd and display all students objects
    }).catch((err)=>{ 
        console.log(err);
    })

})



//***************************Implement the route for the UPDATE in CRUD operatiom */
// .put() is used to update a thing we can use post() method also in here
//.asnyc means it is asnyc function that can wait untill other functions finised . this will optimized your app
// localHost/8070/student/update/12500   ---- > mongoDB create auto ID for every record so it will pass in that URL we can catch it and find specfic student
router.route("/update/:id").put(async (req,res)=>{
    let userID =  req.params.id;    // params means get data from the URL paramete
    const {name,age,gender}  = req.body;   //  destructure method is used in here we can do it as above method also
    /*
        name = req.body.name;
        age =  req.body.age;
        gender = req.body.gender;
    */
   // create an object for updation
   const updateStudent = {
    name,    // these data comes from the frontend
    age,
    gender
   }
   // now we have to check is there any student under relevent ID
   const update = await Student.findByIdAndUpdate(userID,updateStudent)   // we can (userID,{name,age,gender})
   .then(()=>{
    res.status(200).send({status:"User Updated"})    // this will send a status to front end and show updated object
   }).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"error with in updating",error : err.message})
   })

})



/**************************IMPLEMENTATION OF DELETE IN CRUD OPERATION */
router.route("/delete/:id").delete(async(req,res) => {
    let userID = req.params.id ;

    await Student.findByIdAndDelete(userID)
    .then(() =>{
        res.status(200).send({status:"user Deleted"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with in deleting"})
    })
})

/********** SELECT SINGLE USER */
router.route("/get/:id").get(async (req,res) => {
    let userID = req.params.id ;

    const user =  await Student.findById(userID)
    .then( (Student) => {
        res.status(200).send({status:"user fetched ",Student})
    }).catch( (err)=> {
        console.log(err);
        res.status(500).send({status:"Error with in selecting user"})
    })
})


// export the  module
module.exports =  router;
