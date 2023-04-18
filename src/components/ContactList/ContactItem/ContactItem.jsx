import { Li, DeleteButton, StyledSpan } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export function ContactItem({ contact }) {
  const dispatch = useDispatch();

  return (
    <Li>
      <div>
        <StyledSpan weight="500">{contact.name}: </StyledSpan>
        <StyledSpan weight="200">{contact.number}</StyledSpan>
      </div>
      <DeleteButton
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </DeleteButton>
    </Li>
  );
}
