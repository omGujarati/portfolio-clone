import React from "react";
import "@fontsource/preahvihear";
import { Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroAvatar from "./HeroAvatar";
import HeroIntro from "./HeroIntro";
import HeroTyping from "./HeroTyping";

function Hero() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    AOS.refresh();
  }, []);

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