import React from "react";

export const ContactPicker = ({
  contacts,
  selectedContact,
  setSelectedContact,
}) => {
  return (
    <select
      value={selectedContact}
      onChange={(e) => setSelectedContact(e.target.value)}
    >
      <option value="">Select a contact</option>
      {contacts.map((contact, index) => (
        <option
          key={`contact-${contact.name}-contact-${index}`}
          value={contact.id}
        >
          {contact.name}
        </option>
      ))}
    </select>
  );
};
