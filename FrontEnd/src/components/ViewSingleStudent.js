import React from "react";

function ViewSingleStudent(){

    return(
        <div className="container">

        <form>

            <div className="form-group">
                <label for="name" className="form-label">Enter name : </label>
                <input type="text" className="form-control" id="name" />
            </div>

            <div className="form-group">
                <label for="age" className="form-label">Enter age :</label>
                <input type="text" className="form-control" id="age" />
            </div>

            <div className="form-group">
                <label for="gender" className="form-label">Enter gender :</label>
                <input type="text" className="form-control" id="gender" />
            </div>
            
            <br />
            <button type="submit" className="btn btn-primary" >Submit</button>

        </form>

    </div>
    )
}

export default ViewSingleStudent;