import PropTypes from 'prop-types';
import { Button, Form, InputEl } from './Input.styled';

export const Input = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    if (!query) {
      return alert('Input can not be empty, please enter film title');
    }

    onSubmit(query);
    event.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputEl name="query" type="text" />
      <Button type="submit">Search</Button>
    </Form>
  );
};

Input.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
