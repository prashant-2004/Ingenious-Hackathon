import React from "react";
import "../../../style/user/services/ServiceCard.css";
import { NavLink } from "react-router-dom";

function ServiceCards() {
  return (
    <div className="ServiceCards">
      <div className="service-card">
        <div className="service-card-image">
          <img src="https://via.placeholder.com/150" alt="service" />
        </div>
        <div style={{ padding: "2% 5%" }}>
          <div className="service-card-content">
            <h3>Service Title</h3>
            <p>
              Service Description Service Description Service Description
              Service Description Service Description Service Description
              Service Description Service Description Service Description
              Service Description
            </p>
          </div>
          <div className="service-price-content">
            <h3>30$/hr</h3>
            <NavLink to="/service-details" style={{ textDecoration: "none" }}>
              <button className="Book-Now-btn">view-details</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCards;
