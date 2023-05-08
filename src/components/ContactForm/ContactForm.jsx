import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import { Form } from './ContactForm.styled';

export const ContactForm = ({ onAdd, contacts }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, { resetForm }) => {
        const normalizeName = values.name.toLowerCase();
        if (
          contacts.find(contact => contact.name.toLowerCase() === normalizeName)
        ) {
          return alert(`${values.name} is already in contact list`);
        }
        const newContact = {
          ...values,
          id: nanoid(),
        };
        onAdd(newContact);
        resetForm();
      }}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number</label>
        <Field
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = { onAdd: PropTypes.func.isRequired };
