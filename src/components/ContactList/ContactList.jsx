import styles from "./ContactList.module.css";

import Contact from "../Contact/Contact.jsx";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.contactListItem}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
