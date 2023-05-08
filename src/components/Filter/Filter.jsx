import PropTypes from 'prop-types';
import { FormField } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <FormField>
      Find contact by name
      <input type="text" onChange={onChange} value={value} />
    </FormField>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
