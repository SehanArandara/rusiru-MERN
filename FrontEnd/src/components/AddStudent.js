import React, { useState } from "react";
import Axios from "axios" ;   // this npm pack is used for send reqeust to backend to frontend and viseverse

function AddStudent(){
    // create 3  state for 3 input fields
    let [name,setName] = useState("");
    let [age,setAge] =  useState();
    let [gender,setGender] = useState("");

    //this function is used to send data to backend when submit button is clicked
    const sendData = (e)=>{
        e.preventDefault();    //  this function is used to prevent actions in usuall function
        // create a object to pass the data
        const newStudent  = {
            // pass the variables that decalred in states
            name,
            age,
            gender
        }

        //we can check whthet the value is passed corretly by using console.log
        //console.log(newStudent);

        Axios.post("http://localhost:8070/student/add",newStudent).then(()=>{
            alert("added");
            // by doing this we can show a blank space in txt areas
          /*  setAge();
            setName("");
            setGender("");*/
        }).catch((err)=>{
            alert(err);
        })
    }


    return(

    <div className="container">

        <form onSubmit={sendData}>

            <div className="form-group">
                <label for="name" className="form-label">Enter name : </label>
                <input type="text" className="form-control" id="name" onChange={(e)=>{setName(e.target.value)}}/>
            </div>

            <div className="form-group">
                <label for="age" className="form-label">Enter age :</label>
                <input type="text" className="form-control" id="age" onChange={(e)=>{setAge(e.target.value)}}/>
            </div>

            <div className="form-group">
                <label for="gender" className="form-label">Enter gender :</label>
                <input type="text" className="form-control" id="gender" onChange={(e)=>{setGender(e.target.value)}}/>
            </div>
            
            <br />
            <button type="submit" className="btn btn-primary" >Submit</button>

        </form>

    </div>
    )
}
 
export default AddStudent;