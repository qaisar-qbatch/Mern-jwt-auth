import React, { useState } from "react";

const Form = () => {
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChangeFirstName = (e) => {
    setCredentials(() => ({
      ...credentials,
      firstName: e.target.value,
    }));
  };
  const handleChangeLastName = (e) => {
    setCredentials(() => ({
      ...credentials,
      lastName: e.target.value,
    }));
  };
  const handleChangeEmail = (e) => {
    setCredentials(() => ({
      ...credentials,
      email: e.target.value,
    }));
  };
  const handleChangePassword = (e) => {
    setCredentials(() => ({
      ...credentials,
      password: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify(credentials);
    alert(data);
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit} className=" col-md-6">
          <div className="m-3">
            <label>Fisrt Name</label>
            <input
              class="form-control"
              type="text"
              value={credentials.firstName}
              onChange={handleChangeFirstName}
              placeholder="Enter First Name"
              name="firstName"
              id="firstName"
            />
          </div>

          <div className="m-3">
            <label>Last Name</label>
            <input
              class="form-control"
              type="text"
              value={credentials.lastName}
              onChange={handleChangeLastName}
              placeholder="Enter Last Name"
              name="lastName"
              id="lastName"
            />
          </div>

          <div className="m-3">
            <label>email</label>
            <input
              class="form-control"
              type="email"
              value={credentials.email}
              onChange={handleChangeEmail}
              placeholder="Enter email"
              name="email"
              id="email"
            />
          </div>

          <div className="m-3">
            <label>Password</label>
            <input
              class="form-control"
              type="password"
              value={credentials.password}
              onChange={handleChangePassword}
              placeholder="Password"
              name="password"
              id="password"
            />
          </div>

          <button class="btn btn-danger">Submit</button>
        </form>
        <div>
          <ul>
            <li> {credentials.firstName} </li>
            <li> {credentials.lastName} </li>
            <li> {credentials.email} </li>
            <li> {credentials.password} </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Form;
