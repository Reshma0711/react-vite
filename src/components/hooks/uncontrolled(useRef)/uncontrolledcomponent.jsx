import React, { useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from "axios";
import { Button } from "react-bootstrap";




const UncontrolledForm=()=>{

    const usernameref=useRef("")
    const passwordref=useRef("")

  const [formErrors,setFormErrors]=useState({})
   const [submittedData, setSubmittedData] = useState([]);

const onsubmit=(event)=>{
 
     event.preventDefault();


    const usernameentered=usernameref.current.value
    const passwordentered=passwordref.current.value

    const formErrors=validations(usernameentered,passwordentered)
    
    if((Object.keys(formErrors).length)>0){
            setFormErrors(formErrors);

    }
    else{
       loginapi(usernameentered,passwordentered);
    }

    

   
    console.log(formErrors)
    console.log(usernameref)
    console.log(passwordref)
}


    const displayData = (username, password) => {
        const newData = { username, password };
        setSubmittedData([...submittedData, newData]); // Update submittedData with new form data
    };


    
    const deleteData = (index) => {
        const newData = submittedData.filter((_, i) => i !== index);
        setSubmittedData(newData); // Update submittedData after deleting the row
    };

const validations=(username,password)=>{

    const formErrors={}

    if(!username){
        formErrors.usernameerror="Please enter username"
    }
    else if(username.length>20){
        formErrors.usernameerror="Please enter username lessthan 20 characters"
    }

    if(!password){
        formErrors.passworderror="Please enter password"
    }
    else if(password.length>20){
        formErrors.passsworderror="Please enter password lessthan 20 characters"
    }

     return formErrors;

}




const loginapi=async(username,password)=>{
    try{
 const response=await axios.post("https://dummyjson.com/auth/login",
        {
            "username":username,
            "password":password
        }
    )
     console.log(response)
     if(response.status===200){
      displayData(username,password)
     }
    }
    catch(err){
        console.error(err)
    }
   
}





    return(
       <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card p-4 shadow">
            <h2 className="text-center mb-4">Login Form</h2>


            <form onSubmit={onsubmit}>



              {/* Email Input */}
              <div className="mb-5">
                <label htmlFor="username" className="form-label">
                  UserName:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="text"
                  placeholder="Enter your UserName"
                  ref={usernameref}
                />
                <span className="text-danger">{formErrors?.usernameerror}</span>
              </div>




              {/* Password Input */}
              <div className="mb-5">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  ref={passwordref}
                  
                />
                <span className="text-danger">{formErrors?.passworderror}</span>
              </div>


              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>

            </form>
          </div>
        </div>

    



      </div>


 <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <h3 className="text-center">Submitted Data</h3>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Password</th>
                                 <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submittedData.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.username}</td>
                                    <td>{user.password}</td>
                                     <td><button 
                                            className="btn btn-danger"
                                            onClick={() => deleteData(index)}> {/* Call deleteData on button click */}
                                            Delete
                                        </button>
                                        </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    </div>



    )
}


export default UncontrolledForm