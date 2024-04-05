import React from "react";
import "../../../style/user/services/Appoinmentform.css";
const Appoinmentform = () => {
  return (
    <div className="Appoinmentform-container-main">
      <div className="Appoinmentform-container">
        <span className="close1">&times;</span>
        <div className="Appoinmenthead">
          <h1>Appoinment form </h1>
        </div>
        <hr className="line-under"></hr>
        <div className="Form-name">
          <p>Full Name</p>
          <input type="text" className="fullname"></input>
        </div>
        <div className="div2">
          <div className="contact-section">
            <p>Contact Number</p>
            <input type="text" className="contact"></input>
          </div>
          <div className="email-section">
            <p>Email </p>
            <input type="text" className="email-s"></input>
          </div>
        </div>
        <div className="div3">
          <p>Address</p>
          <input type="text" className="address"></input>
        </div>
        <div className="div4">
          <div className="City-section">
            <p>City</p>
            <input type="text" className="city-name"></input>
          </div>
          <div className="zip-section">
            <p>Zip Code</p>
            <input type="text" className="zip-code"></input>
          </div>
        </div>
        <div className="div5">
          <div className="dates=-section">
            <p> What date and time work best for you?</p>
            <p>Date</p>
            <input type="date" className="date-s"></input>
          </div>
          <div className="time-section">
            <p> .</p>
            <p>Time</p>
            <input type="time" className="time-s"></input>
          </div>
        </div>
        <div className="div6">
          <div className="service-category">
            <p>service-category</p>
            <input type="text" className="service-category-text"></input>
          </div>
          <div className="service-selected">
            <p>service-selected</p>
            <input type="text" className="service-selected-text"></input>
          </div>
        </div>
        <div className="div7">
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Appoinmentform;
