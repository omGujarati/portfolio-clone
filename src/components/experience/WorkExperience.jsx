import React from "react";
import "@fontsource/preahvihear";
import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ExperienceCard from "./ExperienceCard";

function WorkExperience() {

  const DATA = [
    { icon: "/images/card1.svg", variant: "right" },
    { icon: "/images/card2.svg", variant: "left" },
    { icon: "/images/card3.svg", variant: "left" },
    { icon: "/images/card4.svg", variant: "right" },
  ];

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

    <Box className="work-section">

      <Box className="work-glow" />

      <Box className="container">

        <Typography
          className="work-title"
          data-aos="fade-down"
        >
          Work Experience
        </Typography>

        <Box className="work-grid grid">

          {DATA.map((item, i) => (

            <ExperienceCard
              key={i}
              {...item}
              aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              delay={i * 150}
            />

          ))}

        </Box>

      </Box>

    </Box>

  );
}

export default WorkExperience;