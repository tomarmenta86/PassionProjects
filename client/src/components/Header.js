import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">DevsByDesign</Typography>
          <Link to="/signin" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Sign In</Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Sign Up</Button>
          </Link>
        </Toolbar>
      </AppBar>
);
}

export default Header;