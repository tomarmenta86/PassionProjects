import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { createTheme, ThemeProvider, CssBaseline, useTheme } from "@mui/material";

const themeDark = createTheme({
  palette: {
    mode: "dark",
  },
});

const themeLight = createTheme({
  palette: {
    mode: "light",
  },
});

function Header({ username }) {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useTheme();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <ThemeProvider theme={darkMode ? themeDark : themeLight}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit">
              <Typography variant="h6">DevsByDesign</Typography>
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
          <IconButton onClick={toggleDarkMode} color="gray">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
