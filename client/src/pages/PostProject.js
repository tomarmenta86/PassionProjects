import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/Header';

const defaultTheme = createTheme()
  

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
    <React.Fragment>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
         <Header />

        <form onSubmit={handleSubmit}>
          <Typography variant="h6" gutterBottom>
              Contact Form
            </Typography>

            
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  fullWidth
                />
            </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone Number"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Project Title"
                  name="projectTitle"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  fullWidth
                />
                </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Project Description"
                  name="projectDescription"
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  fullWidth
                  multiline
                  rows={4}
                />
            </Grid>
              <Grid item xs={12} sm={6}>
            
            <Button type="submit" variant= "contained" color="primary">
              Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Form;

