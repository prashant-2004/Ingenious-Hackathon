import React from "react";

function AllAppoinments() {
  return (
    <div className="Schedule-Appointment">
      <h6>Appointment Schedule</h6>
      <div className="table-container">
        <div className="table-responsive">
          <table className="Schedule-Appointment-table">
            <thead className="Schedule-Appointment-table-thead">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Service</th>
                <th>Date</th>
                <th>Time</th>
                <th>Address</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="Schedule-Appointment-table-tbody">
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>Haircut</td>
                <td>1/1/2024</td>
                <td>10:00 AM</td>
                <td>123, ABC Street</td>
                <td>abc@gmail.com</td>
                <td>1234567890</td>
                <td className="action-btns">
                  <button className="Accept-btn">Accept</button>
                  <button className="Reject-btn">Reject</button>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>John Doe</td>
                <td>Haircut</td>
                <td>1/1/2024</td>
                <td>10:00 AM</td>
                <td>123, ABC Street</td>
                <td>abc@gmail.com</td>
                <td>1234567890</td>
                <td className="action-btns">
                  <button className="Accept-btn">Accept</button>
                  <button className="Reject-btn">Reject</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllAppoinments;
