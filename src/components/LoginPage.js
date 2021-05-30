import React, { useState } from "react";
import authService from "../services/auth.service";
import { useHistory } from 'react-router-dom';

function LoginPage(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isSuccessfull, setIsSuccessfull] = useState(false)

  const handleLogin = (e) => {
    //useHistory.push('/home')
    e.preventDefault();
    setMessage("")
    setIsSuccessfull(false)
    
    // this.form.validateAll();

    authService.login(email, password).then(
        response => {

        console.log(response)
        
           window.location.reload()
          // setMessage(response.data.message)
          // setIsSuccessfull(true)
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

            setMessage(resMessage)
            setIsSuccessfull(false)
        }
      );
  }

  return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h1 className="text-center w-100 my-3">Login Form</h1>
                <form className="form-signin" onSubmit={handleLogin}>
                  <div className="form-label-group my-2">
                    <label for="inputEmail" className="my-2">Username</label>
                    <input
                      type="text"
                      name="loginId"
                      className="form-control"
                    placeholder="Username"
                    autoComplete = "off"
                      required
                      autofocus
                      value={email}
                      onChange={(e)=> setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-label-group my-2">
                    <label for="inputPassword" className="my-2">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                {
                  message ? (<div className="alert-danger p-2">
                  <small>{message}</small>
                </div>) : null
                }
                  
                  <br />
                  <button
                    className="btn btn-lg btn-primary btn-block w-100"
                    type="submit"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default LoginPage;
