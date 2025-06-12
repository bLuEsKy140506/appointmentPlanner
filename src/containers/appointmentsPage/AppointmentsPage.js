import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import { useEffect } from "react";

export const AppointmentsPage = ({
  appointments,
  addAppointment,
  contacts,
}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    addAppointment({ title, date, time });
  };
  useEffect(() => {
    const duplicate = appointments.some(
      (appointment) =>
        typeof appointment.title === "string" &&
        appointment.title.toLowerCase() === title.toLowerCase()
    );
    setIsDuplicate(duplicate);
  }, [title, appointments]);
  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        {/* <TileList
          items={appointments}
          title="Appointments"
          itemType="appointment"
          isDuplicate={isDuplicate}
        /> */}
      </section>
    </div>
  );
};
