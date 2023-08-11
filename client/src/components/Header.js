import React from "react";
import { AppBar, Toolbar, Typography, Button, Link } from "@mui/material";

function Header() {
return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">The Passion Projects</Typography>
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