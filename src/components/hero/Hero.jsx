import React from "react";

import { Box } from "@mui/material";
import "@fontsource/preahvihear";

import HeroAvatar from "./HeroAvatar";
import HeroIntro from "./HeroIntro";
import HeroTyping from "./HeroTyping";

function Hero() {

  return (
    <Box className="hero-section">

      <Box className="container">

        <Box className="hero-flex flex-align-start">

          <HeroAvatar />

          <HeroIntro />

        </Box>

        <HeroTyping />

      </Box>

    </Box>
  );
}

export default Hero;