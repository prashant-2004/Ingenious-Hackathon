import React, { useState } from "react";

function AllAppointments() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: "John Doe",
      service: "Haircut",
      date: "1/1/2024",
      time: "10:00 AM",
      address: "123, ABC Street",
      email: "abc@gmail.com",
      phone: "1234567890",
      status: "Pending",
    },
    {
      id: 2,
      name: "John Doe",
      service: "Haircut",
      date: "1/1/2024",
      time: "10:00 AM",
      address: "123, ABC Street",
      email: "abc@gmail.com",
      phone: "1234567890",
      status: "Pending",
    },
  ]);

  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedAction, setSelectedAction] = useState(null);

  const handleAction = (id, action) => {
    setSelectedAppointment(id);
    setSelectedAction(action);
  };

  const handleConfirm = (confirmed) => {
    if (confirmed) {
      const updatedAppointments = appointments.map((appointment) =>
        appointment.id === selectedAppointment
          ? { ...appointment, status: selectedAction }
          : appointment
      );
      setAppointments(updatedAppointments);
    }
    // Reset selected appointment and action after confirmation
    setSelectedAppointment(null);
    setSelectedAction(null);
  };

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
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.id}</td>
                  <td>{appointment.name}</td>
                  <td>{appointment.service}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.address}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.phone}</td>
                  <td>
                    {selectedAppointment === appointment.id ? (
                      <div className="action-btns">
                        Confirm{" "}
                        <span className="appointment-status">
                          {selectedAction}
                        </span>{" "}
                        this appointment? <br />
                        <button
                          className="yes-action-btn"
                          onClick={() => handleConfirm(true)}
                        >
                          Yes
                        </button>
                        <button
                          className="no-action-btn"
                          onClick={() => handleConfirm(false)}
                        >
                          No
                        </button>
                      </div>
                    ) : appointment.status === "Pending" ? (
                      <select
                        className="Action-select"
                        onChange={(e) =>
                          handleAction(appointment.id, e.target.value)
                        }
                      >
                        <option value="">Select Action</option>
                        <option value="Accepted">Accept</option>
                        <option value="Rejected">Reject</option>
                      </select>
                    ) : (
                      <span>{appointment.status}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllAppointments;
