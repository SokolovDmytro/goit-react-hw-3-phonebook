import React from "react";
import ContactListItem from "../contactForm/contactListItem/ContactListItem";
import PropTypes from "prop-types";

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <ContactListItem
        contact={contact}
        key={contact.id}
        deleteContact={deleteContact}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  )
};

export default ContactList;