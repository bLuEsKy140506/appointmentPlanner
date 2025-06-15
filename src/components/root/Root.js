import { Outlet, NavLink } from "react-router-dom";
import "./Root.css"; // Assuming you have a CSS file for styles

export const ROUTES = {
  CONTACTS: "/contacts",
  APPOINTMENTS: "/appointments",
};

function Root() {
  return (
    <>
      <nav>
        <NavLink
          to={ROUTES.CONTACTS}
          className={({ isActive }) =>
            isActive ? "active button-48" : "button-48"
          }
        >
          {" "}
          Contacts
        </NavLink>
        <NavLink
          to={ROUTES.APPOINTMENTS}
          className={({ isActive }) =>
            isActive ? "active button-48" : "button-48"
          }
        >
          {" "}
          Appointments
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Root;
