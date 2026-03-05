import React from 'react'
import { Box } from "@mui/material";
import Header from "../components/layout/Header";
import Hero from "../components/hero/Hero";
import Experience from "../components/experience/WorkExperience";
import "../styles/main.css";

function index() {
  return (
    <Box sx={{ bgcolor: "var(--bg-main)" }}>
      <Header />
      <Hero />
      <Experience />
    </Box>
  )
}

export default index