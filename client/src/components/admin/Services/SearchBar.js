import React, { useState } from "react";
import "../../../style/admin/services/SearchBar.css";

function SearchBar() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="Search-Bar-section">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="search-icon"
      >
        <g opacity="0.7" clip-path="url(#clip0_16_6386)">
          <path
            d="M2.5 8.33333C2.5 9.09938 2.65088 9.85792 2.94404 10.5657C3.23719 11.2734 3.66687 11.9164 4.20854 12.4581C4.75022 12.9998 5.39328 13.4295 6.10101 13.7226C6.80875 14.0158 7.56729 14.1667 8.33333 14.1667C9.09938 14.1667 9.85792 14.0158 10.5657 13.7226C11.2734 13.4295 11.9164 12.9998 12.4581 12.4581C12.9998 11.9164 13.4295 11.2734 13.7226 10.5657C14.0158 9.85792 14.1667 9.09938 14.1667 8.33333C14.1667 7.56729 14.0158 6.80875 13.7226 6.10101C13.4295 5.39328 12.9998 4.75022 12.4581 4.20854C11.9164 3.66687 11.2734 3.23719 10.5657 2.94404C9.85792 2.65088 9.09938 2.5 8.33333 2.5C7.56729 2.5 6.80875 2.65088 6.10101 2.94404C5.39328 3.23719 4.75022 3.66687 4.20854 4.20854C3.66687 4.75022 3.23719 5.39328 2.94404 6.10101C2.65088 6.80875 2.5 7.56729 2.5 8.33333Z"
            stroke="#0B1C33"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5 17.5L12.5 12.5"
            stroke="#0B1C33"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_16_6386">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <input placeholder="Search" className="Search-Bar" />

      <button className="Add-Service" onClick={toggleModal}>
        Add Service
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h5>Service add form</h5>
            <p>Please fill the form and upload the file</p>

            <form className="add-service-form">
              <div style={{ display: "flex", gap: "1rem" }}>
                <input
                  className="service-name-input"
                  id="service-input"
                  type="text"
                  placeholder="Service Name"
                />
                <input
                  id="service-input"
                  type="number"
                  placeholder="Service Price"
                />
              </div>
              <input
                id="service-input"
                type="text"
                placeholder="Service Short Description"
              />{" "}
              <br />
              <textarea
                id="service-input"
                type="text"
                placeholder="Service Long Description"
              />{" "}
              <br />
              <label>Upload your file</label>
              <br />
              <div class="file-input">
                <input id="service-input" type="file" class="real-input" />
                <div class="button">
                  Choose File <span>or drop file</span>
                </div>
              </div>
              <button className="Add-Service-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
