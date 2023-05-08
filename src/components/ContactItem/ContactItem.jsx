import PropTypes from 'prop-types';
import { StyledContact } from './ContactItem.styled';

export const ContactItem = ({ contact: { name, number } }) => {
  return (
    <>
      <StyledContact>{name}</StyledContact>
      <StyledContact>{number}</StyledContact>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
