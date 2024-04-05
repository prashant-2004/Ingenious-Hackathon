import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NavbarComponent from "../../components/users/navbar";
import "../../style/user/login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8000/user-signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await res.json();

    console.log(data);

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    } else if (res.status === 404) {
      window.alert("Network Error");
      console.log("Network Error");
    } else {
      window.alert("Login Successful");
      console.log("Login Successful");

      navigate("/dashboard");
    }
  };

  return (
    <>
    <NavbarComponent />
    <div className="user-login">
      <div className="user-login-form">
        <h1 className="login-title">SkillStack</h1>
        <form method="POST">
          <div className="form-group mb-3">
            <label className="login-input-text" htmlFor="exampleInputEmail1">
              Email address
            </label>
            <input
              type="email"
              className="form-control-input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="login-input-text" htmlFor="exampleInputPassword1">
              Password
            </label>
            <input
              type="password"
              className="form-control-input"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text-center">
            <button onClick={loginUser} type="submit" className="login-btn">
              Login
            </button>
          </div>

          <div className="text-center mt-3 signup-page-link">
            Don't have an account?{" "}
            <NavLink className={"NavLink"} to={"/signup"}>
              Sign Up
            </NavLink>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;
