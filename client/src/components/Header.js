import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Header({ username }) {
  return (
    <AppBar position="static">
      <Toolbar>
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">
          <Typography variant="h6">DevsByDesign
          </Typography>
          </Button>
        </Link>
        <Link to="/signin" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Sign In</Button>
        </Link>
        <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Sign Up</Button>
        </Link>
        <Link to="/userprofilepage" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Profile</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
