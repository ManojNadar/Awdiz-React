import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  console.log(name, " - name");
  console.log(email, " - email");
  console.log(password, " - password");

  const toSetName = (e) => {
    setName(e.target.value);
  };
  const toSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const toSetPassword = (e) => {
    setpassword(e.target.value);
  };

  function registerForm(e) {
    e.preventDefault();

    if (!name && !email && !password) {
      return alert("all fields are mandatory");
    }

    if (!name) {
      return alert("name is required");
    }
    if (name.length < 4) {
      return alert("name length should atleast 5 characters");
    }
    if (!email) {
      return alert("email is required");
    }
    if (!password) {
      return alert("password is required");
    }
    if (password.length < 6) {
      return alert("password must contain 6 or more characters");
    }

    return alert("form registered successfully");
  }
  return (
    <div id="mainForm">
      <div id="formHeading">
        <h2>Registration form</h2>
      </div>
      <div id="formContainer">
        <form onSubmit={registerForm}>
          <label>Name</label> <br />
          <input
            type="text"
            placeholder="enter your name"
            onChange={toSetName}
          />
          <br />
          <label>Email</label> <br />
          <input
            type="email"
            placeholder="enter your Email"
            onChange={toSetEmail}
          />
          <br />
          <label>Password</label> <br />
          <input
            type="password"
            placeholder="enter your password"
            onChange={toSetPassword}
          />
          <br />
          <input type="submit" value="Register" id="submit" />
        </form>
      </div>
    </div>
  );
};

export default Form;
