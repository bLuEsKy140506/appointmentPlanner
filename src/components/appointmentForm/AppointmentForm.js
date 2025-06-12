import React from "react";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <>
      <form className="appointment-form" onSubmit={handleSubmit}></form>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contact">Contact:</label>
        <select
          id="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        >
          <option value="">Select a contact</option>
          {contacts.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={getTodayString()}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Appointment</button>
    </>
  );
};
