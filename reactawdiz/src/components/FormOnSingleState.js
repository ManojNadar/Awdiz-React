import React, { useState } from "react";

const FormOnSingleState = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
    // console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userData.name && !userData.email && !userData.password)
      return alert("all fields are mandatory");
    if (!userData.name) return alert("name is required");
    if (!userData.email) return alert("email is required");
    if (!userData.password) return alert("password is required");
    if (userData.password.length < 8)
      return alert("password length must be atleast 8 characters");
    alert("registeration success");

    setUserData({
      name: "",
      email: "",
      password: "",
    });
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     if (userData.name && userData.email && userData.password) {
  //       if (!userData.name) {
  //         if (!userData.email) {
  //           if (!userData.password) {
  //             if (userData.password.length > 7) {
  //               alert("registerattion success");
  //               setUserData({
  //                 name: "",
  //                 email: "",
  //                 password: "",
  //               });
  //             } else {
  //               alert("password length must be atleast 8  or more characters");
  //             }
  //           } else {
  //             alert("password is required");
  //           }
  //         } else {
  //           alert("email is required");
  //         }
  //       } else {
  //         alert("name is required");
  //       }
  //     } else {
  //       alert("all fields are mandatory");
  //     }
  //   };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label> <br />
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
        <br />
        <label>Email</label> <br />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <br />
        <label>Password</label> <br />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </>
  );
};

export default FormOnSingleState;
