import React, { useState } from 'react'

import axios from "axios";
import Navbar from './Navbar';
const Signup = () => {

    const[inputs,setInputs]=useState({});

   const inputHandler=(e)=>{
    console.log("onchange");
    setInputs({
        ...inputs,[e.target.name]:e.target.value
    })
    console.log(inputs);
   }
   const submitHandler=()=>{
    console.log("button clicked",inputs);
    axios.post("http://localhost:7000/api/signup");
   }
  return (
    <div>
        <Navbar/>
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="row g-3">
                        < div className="col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label"> {" "}Name</label>
                       
                    <input type="text" className="form-control" name="name" onChange={inputHandler}/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label"> {" "}Email Id</label>
                        <input type="text" className="form-control" name="email" onChange={inputHandler} />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <label htmlFor="" className="form-label">  {" "} Address</label>
                        <textarea name="address" id="" cols="30" rows="10" className="form-control" onChange={inputHandler}></textarea>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label"> {" "}Phone</label>
                        <input type="text" className="form-control" name="phone" onChange={inputHandler} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label"> {" "}Username</label>
                        <input type="text" className="form-control" name="username" onChange={inputHandler} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label"> {" "}Password</label>
                        <input type="text" className="password form-control" name="password" onChange={inputHandler}/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <button className="btn btn-danger" onClick={submitHandler}>Register</button>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                         <a href="/">Back to Login</a>
                        </div>
                        </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup