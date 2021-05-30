import React, { useState } from "react";

function ChangePasswordPage() {

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const handleChangePassword = () => {

  }
  return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h1 className="text-center w-100 my-3">User Details</h1>
                <form onSubmit={handleChangePassword}>
                <div className="form-label-group my-2">
                    <label for="inputEmail" className="my-2">First name</label>
                    <input
                      name="firstname"
                      className="form-control"
                      placeholder="Enter first name"
                      required
                      autofocus
                      disabled
                      value={firstname}
                      />
                  </div>
                  <div className="form-label-group my-2">
                    <label for="inputEmail" className="my-2">Last name</label>
                    <input
                      name="lastname"
                      className="form-control"
                      placeholder="Enter last name"
                      required
                      disabled
                      value={lastname}
                      />
                  </div>
                  <div className="form-label-group my-2">
                    <label for="inputEmail" className="my-2">Username</label>
                    <input
                      name="username"
                      className="form-control"
                      placeholder="Enter username"
                      required
                      disabled
                      value={username}
                      />
                  </div>
                  <div className="form-label-group my-2">
                    <label for="inputEmail" className="my-2">Email address</label>
                    <input
                      type="email"
                      name="loginId"
                      className="form-control"
                      placeholder="Email address"
                      required
                      disabled
                      value={email}
                      />
                  </div>
                  <div className="form-label-group my-2">
                    <label for="inputPassword" className="my-2">Old Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      required
                      value={currentPassword}
                      onChange={(e)=> setCurrentPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-label-group my-2">
                    <label for="inputPassword" className="my-2">New Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      required
                      value={newPassword}
                      onChange={(e)=> setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="alert-danger p-2">
                    <small>Invalid Credentials</small>
                  </div>
                  <br />
                  <button
                    className="btn btn-lg btn-primary btn-block w-100"
                    type="submit"
                  >
                    Change Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ChangePasswordPage;
