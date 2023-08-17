import React, { useState } from 'react';
import { TextField, FormControl, Button } from '@mui/material';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, phone, projectTitle, projectDescription);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact Form</h1>
      <section>
        <FormControl>
          <TextField
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <TextField
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <TextField
            label="Phone Number"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormControl>
      </section>
      <section>
        <FormControl>
          <TextField
            label="Project Title"
            name="projectTitle"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <textarea
            label="Project Description"
            name="projectDescription"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
        </FormControl>
      </section>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
