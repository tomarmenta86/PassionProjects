import { Typography, Link as MuiLink } from "@mui/material";
import * as React from "react";

function Footer(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <MuiLink color="inherit" href="./Home">
        DevsByDesign
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
      <MuiLink color="inherit" href="/PrivacyPolicy">
        Privacy Policy
        </MuiLink>{' '}
        <MuiLink color="inherit" href="/TermsAndConditions">
        Terms And Conditions
        </MuiLink>{' '}
    </Typography>
  );
}
 
export default Footer;
