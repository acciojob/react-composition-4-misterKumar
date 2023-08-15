import React, { useState } from 'react';

const Form = ({ onSubmit, fields }) => {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={formValues[field.name] || ''}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
