import React from "react";
import "../../../style/admin/dashboard/ScheduleAppointment.css";

function ScheduleAppointment() {
  return (
    <div className="Schedule-Appointment">
      <h6>Appointment Schedule</h6>
      <div class="table-responsive">
      <table className="Schedule-Appointment-table">
        <thead className="Schedule-Appointment-table-thead">
          <tr>
            <th>Name</th>
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody className="Schedule-Appointment-table-tbody">
          <tr>
            <td>John Doe</td>
            <td>Haircut</td>
            <td>1/1/2024</td>
            <td>10:00 AM</td>
            <td>+91 1234567890</td>
          </tr>

          <tr>
            <td>John Doe</td>
            <td>Haircut</td>
            <td>1/1/2024</td>
            <td>10:00 AM</td>
            <td>+91 1234567890</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default ScheduleAppointment;
