import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate) {
      addContact({ name, phone, email });
    } else {
      alert("Contact name already exists. Please use a different name.");
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  /*
  Using hooks, check for contact name in the
  contacts array variable in props
  */

  useEffect(() => {
    const duplicate = contacts.some(
      (contact) =>
        typeof contact.name === "string" &&
        contact.name.toLowerCase() === name.toLowerCase()
    );
    setIsDuplicate(duplicate);
  }, [name, contacts]);
  console.log("duplicate:", isDuplicate);

  return (
    <div>
      <ContactForm
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
      <TileList items={contacts} isDuplicate={isDuplicate} />
    </div>
  );
};
/*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

//   return (
//     <div>
//       <section>
//         <h2>Add Contact</h2>
//       </section>
//       <hr />
//       <section>
//         <h2>Contacts</h2>
//       </section>
//     </div>
//   );
// };
