import React from "react";
import { IconButton, Box } from "@mui/material";

function HamburgerButton({ open, toggle }) {
  return (
    <IconButton
      onClick={toggle}
      className={`hamburger-button ${open ? "hamburger-open" : ""}`}
    >
      <Box className="hamburger-box">
        <Box className="hamburger-line line-top" />
        <Box className="hamburger-line line-middle" />
        <Box className="hamburger-line line-bottom" />
      </Box>
    </IconButton>
  );
}

export default HamburgerButton;