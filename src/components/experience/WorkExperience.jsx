import React from "react";
import "@fontsource/preahvihear";
import { Box, Typography } from "@mui/material";
import "aos/dist/aos.css";

import ExperienceCard from "./ExperienceCard";

const EXPERIENCE_DATA = [
  { icon: "/images/card1.svg", variant: "right" },
  { icon: "/images/card2.svg", variant: "left" },
  { icon: "/images/card3.svg", variant: "left" },
  { icon: "/images/card4.svg", variant: "right" },
];

function WorkExperience() {

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

          {EXPERIENCE_DATA.map((item, index) => (
            <ExperienceCard
              key={item.icon}
              {...item}
              aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              delay={index * 150}
            />
          ))}

        </Box>

      </Box>

    </Box>
  );
}

export default WorkExperience;