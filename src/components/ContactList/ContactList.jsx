import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { StyledItem, StyledList } from './ContactList.styled';

export const ContactList = ({ getContacts, onDelete }) => {
  return (
    <StyledList>
      {getContacts.map(contact => (
        <StyledItem key={contact.id}>
          <ContactItem contact={contact} />
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </StyledItem>
      ))}
    </StyledList>
  );
};

ContactList.propTypes = {
  getContacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
