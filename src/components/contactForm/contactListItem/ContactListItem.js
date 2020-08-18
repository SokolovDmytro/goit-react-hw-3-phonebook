import React from "react";
import PropTypes from "prop-types";

const ContactListItem = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <li>
      <span>{name} </span>
      <span>{number} </span>
      <button type="button" id={id} onClick={deleteContact}>
        DELETE
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  })
};

export default ContactListItem;