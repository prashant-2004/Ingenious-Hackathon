import React, { useState } from "react";
import "../../../style/admin/dashboard/sidebar.css";
import AppointmentIcon from "../../../assets/admin/Appointment.svg";
import ServiceIcon from "../../../assets/admin/Service.svg";
import GoalsIcon from "../../../assets/admin/Goal.svg";

function Sidebar() {
  const [activeLink, setActiveLink] = useState(0);

  const navLinks = [
    {
      name: "Dashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_16_4420)">
            <path
              d="M4 4H10V12H4V4Z"
              stroke="#FEFEFE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 16H10V20H4V16Z"
              stroke="#FEFEFE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 12H20V20H14V12Z"
              stroke="#FEFEFE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 4H20V8H14V4Z"
              stroke="#FEFEFE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_16_4420">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "Appointment",
      icon: <img alt="Appointment" src={AppointmentIcon} />,
    },
    { name: "Service", icon: <img alt="Service" src={ServiceIcon} /> },
    { name: "Goals", icon: <img alt="Goals" src={GoalsIcon} /> },
  ];

  const handelLogout = () => {
    localStorage.removeItem("first_session");
    window.location.href = "/login";
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <h4>Logo</h4>
      </div>
      <h6>MENU</h6>
      <div className="nav-links">
        {navLinks.map((link, index) => (
          <div
            className={`nav-link ${index === activeLink ? "active" : ""}`}
            onClick={() => setActiveLink(index)}
            key={index}
          >
            {link.icon}
            {link.name}
          </div>
        ))}
      </div>
      <div className="nav-logout" onClick={handelLogout}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_16_4819)">
            <path
              d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16"
              stroke="#E53761"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 12H21L18 9"
              stroke="#E53761"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 15L21 12"
              stroke="#E53761"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_16_4819">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Logout
      </div>
    </div>
  );
}

export default Sidebar;
