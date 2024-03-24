import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../style/admin/login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginAdmin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8000/admin-signin", {
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
    } else {
      window.alert("Login Successful");
      console.log("Login Successful");
      navigate("/admin-dashboard");
    }
  };

  return (
    <div className="admin-login">
      <h1 className="text-center mt-4 admin-login-title">
        Log in to your account
      </h1>
      <h5 className="admin-login-subtitle">
        Welcome back! Please enter your details.
      </h5>
      <div className="container admin-login-from">
        <form method="POST">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">
              Email address <span className="required">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">
              Password <span className="required">*</span>
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text-center">
            <button
              onClick={loginAdmin}
              type="submit"
              className="btn btn-primary m-4 admin-login-button"
            >
              Sign
            </button>

            <h5 className="admin-login-subtitle mt-5">
              Don’t have an account?
              <span>
                <Link className="signup-link" to={"/admin-signup"}>
                  {" "}
                  Sign up
                </Link>
              </span>
            </h5>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
