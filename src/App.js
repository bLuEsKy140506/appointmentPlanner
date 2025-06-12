import React from "react";
import { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addContact = (contact) => {
    setContacts((prev) => [...prev, contact]); // ✅ correct
  };

  const addAppointment = (appointment) => {
    setAppointments((prev) => [...prev, appointment]); // ✅ correct
  };
  /*
  Implement functions to add data to
  contacts and appointments
  */
  console.log("Contacts:", contacts);
  console.log("Appointments:", appointments);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        {/* <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} /> */}
        <Route
          path={ROUTES.CONTACTS}
          element={<ContactsPage contacts={contacts} addContact={addContact} />}
        />

        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appointments={appointments}
              addAppointment={addAppointment}
              contacts={contacts}
            /> /* Add props to AppointmentsPage */
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
