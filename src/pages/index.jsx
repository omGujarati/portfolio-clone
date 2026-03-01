import React from 'react'
import { Box } from "@mui/material";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/WorkExperience";

const COLORS = {
  // bg: "#0A0015",
  bg: "#11071F",
  // header: "#190b2d",
  header: "#1A0B2E",
  purple: "#7127ba",
  purpleLight: "#9B59D8",
  text: "#ffffff",
  textSoft: "rgba(255,255,255,0.6)",
};

function index() {
  return (
    <Box sx={{ bgcolor: COLORS.bg }}>
      <Header />
      <Hero />
      <Experience />
    </Box>
  )
}

export default index