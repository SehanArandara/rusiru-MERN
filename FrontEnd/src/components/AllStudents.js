import React,{useState,useEffect} from "react";
import axios from "axios";
import ViewsStudent from "./ViewStudent";   //  import viewStudent component that view sngle student

function AllStudens(){
    // all the students are come from database to here as an array of student object
    //so we have to create a useState
    let [students,setStudnts] =  useState([]);

    // creation of useEffect --- > this have 2 parameters 1. function going to execute 2. useEffect's option array
    useEffect(()=>{
        // create a function to getStudents
        const getAllStudent = () =>{
            axios.get("http://localhost:8070/student/").then((res)=>{
               // console.log(res);  // -- we can check the response is working
                setStudnts(res.data);
            }).catch((err)=>{
                console.log(err.message);
            })
        }

        // call the funcion
        getAllStudent()
    },[]);
    return(
        <div className="container">
            <h1>AllStudents</h1>
            <div className="container">
                {
                    students.map((student)=>{
                        return <ViewsStudent name={student.name}
                                             age={student.age}
                                             gender ={student.gender}
                                             _id={student._id} />
                    })
                }
            </div>
        </div>
    )
}

export default AllStudens;