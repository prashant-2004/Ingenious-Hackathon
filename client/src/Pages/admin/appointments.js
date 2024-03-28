import React from "react";
import AdminSidebar from "../../components/admin/Dashboard/sidebar";
import AllAppoinments from "../../components/admin/AllAppoinments";

function appointments() {
  return (
    <div
      style={{
        display: "flex",
        background: "var(--Surface, #F2F5FA)",
        minHeight: "100vh",
      }}
    >
      <AdminSidebar />
      <div
        style={{
          marginLeft: "12.5%",
          width: "100%",
          height: "100%",
          padding: "0% 3%",
        }}
      >
        <AllAppoinments />
      </div>
    </div>
  );
}

export default appointments;
