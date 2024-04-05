import React, { useState } from "react";
import "../../../style/user/services/AllServices.css";
import ServiceCards from "./ServiceCards";
import Appoinmentform from "../services/Appoinmentform";

function AllServices() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="AllServices">
        <div className="tab-container">
          <div
            className={`tab ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => handleTabClick("tab1")}
          >
            Tab 1
          </div>
          <div
            className={`tab ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => handleTabClick("tab2")}
          >
            Tab 2
          </div>
          <div
            className={`tab ${activeTab === "tab3" ? "active" : ""}`}
            onClick={() => handleTabClick("tab3")}
          >
            Tab 3
          </div>
        </div>
        <div className="tab-content">
          {activeTab === "tab1" && (
            <div>
              <ServiceCards />
            </div>
          )}
          {activeTab === "tab2" && <div>Content for Tab 2</div>}
          {activeTab === "tab3" && <div>Content for Tab 3</div>}
        </div>
      </div>
      <Appoinmentform />
    </>
  );
}

export default AllServices;
