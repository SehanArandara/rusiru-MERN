import React from "react";

function ViewsStudent(props){
    const name= props.name;
    const age = props.age;
    const gender = props.gender;
    const _id = props._id;

    return(
        <div className="container-md">
            <br/>
            <hr />
            <h2>Name :{name}</h2>
            <h3>Age :{age}</h3>
            <h3>Gender :{gender}</h3>
            <br/>
            <a href={`/edit/${_id}`}>
                <button className="btn btn-warning" >Edit  </button>
            </a>
            <br/>
            <br/>
            <a href="#">
                <button className="btn btn-danger">Delete</button>
            </a>
            <hr/>
        </div>
    )
}

export default ViewsStudent;