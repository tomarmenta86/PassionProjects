import { Typography, Link } from "@mui/material";
import * as React from "react";

function Footer(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="./Home">
          DevsByDesign
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
 
export default Footer;