import React,{ useState } from "react";
import { useNavigate } from 'react-router-dom';

function Signup() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name:"", email: "", number: "", work:"", password: "", cpassword: ""
  });

  let name, value;

  const handleInputs = (e) => {
      name = e.target.name;
      value = e.target.value;

      setUser({ ...user, [name]:value});
  }

  const postData = async (e) =>{
    e.preventDefault();

    const { name, email, number, work, password, cpassword } = user;

    const resp = await fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name:name, email:email, number:number, work:work, password:password, cpassword:cpassword
      })
    });

    const data = await resp.json();

    console.log(data);

    if(resp.status === 422 || !data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }else{
      window.alert("Registration Successfull");
      console.log("Registration Successfull");

      navigate("/login");
    }
  }

  return (
    <>
      <h1 className="text-center mt-4">Sign Up</h1>

      <div className="container">
        <form method="POST">
          <div className="form-group">
            <label htmlFor="exampleInputName">Your Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputName"
              value={user.name}
              onChange={handleInputs}
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={user.email}
              onChange={handleInputs}
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPhone">Phone No.</label>
            <input
              type="number"
              name="number"
              className="form-control"
              id="exampleInputPhone"
              value={user.number}
              onChange={handleInputs}
              placeholder="phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputProfession">Your Profession</label>
            <input
              type="text"
              name="work"
              className="form-control"
              id="exampleInputProfession"
              value={user.work}
              onChange={handleInputs}
              placeholder="Your Profession"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="exampleInputPassword"
              value={user.password}
              onChange={handleInputs}
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputCPassword">Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              className="form-control"
              id="exampleInputCPassword"
              value={user.cpassword}
              onChange={handleInputs}
              placeholder="Password"
            />
          </div>

          <div className="text-center">
            <button type="submit" onClick={postData} className="btn btn-primary  m-4">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;