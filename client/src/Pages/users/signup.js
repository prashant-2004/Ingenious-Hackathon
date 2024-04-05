import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NavbarComponent from "../../components/users/navbar";
import "../../style/user/login.css";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, number, work, password, cpassword } = user;

    const resp = await fetch("http://localhost:8000/user-signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        number: number,
        work: work,
        password: password,
        cpassword: cpassword,
      }),
    });

    const data = await resp.json();

    console.log(data);

    if (resp.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successfull");
      console.log("Registration Successfull");

      navigate("/login");
    }
  };

  return (
    <>
      <NavbarComponent />

      <div className="user-signup">
        <div className="user-signup-form">
          <h1 className="login-title">SkillStack</h1>

          <form method="POST">
            <div style={{ display: "flex", gap: "1rem" }}>
              <div className="form-group mb-3">
                <label className="login-input-text" htmlFor="exampleInputName">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control-input"
                  id="exampleInputName"
                  value={user.name}
                  onChange={handleInputs}
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label className="login-input-text" htmlFor="exampleInputPhone">
                  Phone No.
                </label>
                <input
                  type="number"
                  name="number"
                  className="form-control-input"
                  id="exampleInputPhone"
                  value={user.number}
                  onChange={handleInputs}
                  placeholder="Phone"
                />
              </div>
            </div>

            <div className="form-group mb-3">
              <label className="login-input-text" htmlFor="exampleInputEmail1">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control-input"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={user.email}
                onChange={handleInputs}
                placeholder="Enter email"
              />
            </div>

            <div style={{ display: "flex", gap: "1rem", marginBottom: "-4%" }}>
              <div className="form-group">
                <label
                  className="login-input-text"
                  htmlFor="exampleInputPassword"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control-input"
                  name="password"
                  id="exampleInputPassword"
                  value={user.password}
                  onChange={handleInputs}
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label
                  className="login-input-text"
                  htmlFor="exampleInputCPassword"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="cpassword"
                  className="form-control-input"
                  id="exampleInputCPassword"
                  value={user.cpassword}
                  onChange={handleInputs}
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="text-center">
              <button type="submit" onClick={postData} className="login-btn">
                Register
              </button>
            </div>

            <div className="text-center mt-3 signup-page-link">
              Already have an account?{" "}
              <NavLink className={"NavLink"} to={"/Signin"}>
                Sign In
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
