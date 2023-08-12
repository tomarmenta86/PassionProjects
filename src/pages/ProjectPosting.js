import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function MyForm() {
  const [formData, setFormData] = useState({});
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior

    const dataToSubmit = {
      ...formData // Any additional form data object here
    };

    // Call any necessary submission methods here
    // ...

    history.push('/my-new-page'); // Redirect to new page
  }

  const handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    setFormData({
      ...formData, // Keep existing form data
      [name]: value // Update form data for the input field that changed
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="my-input">My Input: </label>
      <input id="my-input" type="text" name="myInput" onChange={handleInputChange} />

      <button type="submit">Submit</button>
    </form>
  );
}