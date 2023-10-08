import React from 'react'
import Navbar from './Navbar'


const Login = () => {
  return (
    <div>
        <Navbar/>
         
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                    
                    <h1>Book Store App - Login</h1>

                    <div className="row g-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <label htmlFor="" className="form-label">Username</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" name="" id="" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <button className="btn btn-success">Login</button>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                         <a href="/signup">New Users Click Here</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Login