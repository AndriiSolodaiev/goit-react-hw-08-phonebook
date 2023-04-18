import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <ul>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
