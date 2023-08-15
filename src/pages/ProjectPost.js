import React, { useState } from 'react';

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
        <label>First Name</label>
        <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <label>Last Name</label>
        <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Phone Number</label>
        <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </section>
      <section>
        <label>Project Title</label>
        <input type="text" name="projectTitle" value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} />
        <label>Project Description</label>
        <textarea name="projectDescription" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} />
      </section>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;


