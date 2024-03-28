import React from "react";
import "../../../style/admin/services/servicesCard.css";
import ServiceImg1 from "../../../assets/admin/Bounds.png";

function servicesCard() {
  return (
    <div className="services-Cards">
      <div className="services-Card">
        <img src={ServiceImg1} alt="service1" />
        <div className="services-info">
          <h5>Personal Fitness Training</h5>
          <p>
            Personal Fitness Training involves tailored exercise programs
            designed to meet individual goals, improve fitness levels, and
            enhance overall health. Certified trainers provide guidance,
            motivation, and support throughout the journey to wellness.
          </p>
          <hr />
          <div className="service-price-and-other-info">
            <h5>$48</h5>
            <h5>100 Appoiments</h5>
            <h5>4.2 Stars</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default servicesCard;
