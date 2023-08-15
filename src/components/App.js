
import React from 'react';
import Form from './Form'; // Assuming the Form component is in a file named Form.js

const fields = [
  { name: 'firstName', type: 'text', label: 'Name' },
  { name: 'email', type: 'email', label: 'Email' },
  { name: 'password', type: 'password', label: 'Password' },
  
];

const App = () => {
  const handleSubmit = (values) => {
    console.log('Form submitted with values:', values);
    // You can perform further actions with the submitted values here
  };

  return (
    <div>
      <h1>Sample Form</h1>
      <Form onSubmit={handleSubmit} fields={fields} />
    </div>
  );
};

export default App;

