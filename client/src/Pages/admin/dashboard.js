import React from "react";
import AdminSidebar from "../../components/admin/Dashboard/sidebar";
import AdminCards from "../../components/admin/Dashboard/cards";
import Chart from "../../components/admin/Dashboard/chart";
import ScheduleAppointment from "../../components/admin/Dashboard/ScheduleAppointment";

function dashboard() {
  return (
    <div style={{display: "flex", background: "var(--Surface, #F2F5FA)", minHeight: "100vh"}}>
      <AdminSidebar />
      <div style={{marginLeft: "16%", padding: "2rem 1rem"}}>
        <AdminCards />
        <Chart />
      </div>
      <ScheduleAppointment />
    </div>
  );
}

export default dashboard;
