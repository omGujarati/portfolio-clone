import React from "react";
import { Box } from "@mui/material";

const PARTICLES = [
  { top: 6, left: 8, background: "#7B2FBE" },
  { top: 30, right: 6, background: "#FFFFFF" },
  { bottom: 18, right: 20, background: "#A259FF" },
  { bottom: 32, left: 6, background: "#D9D9D9" },
];

function IconPlatform({ icon }) {

  return (
    <Box className="icon-platform">

      <Box className="icon-shadow" />

      <svg
        width="112"
        height="43"
        viewBox="0 0 112 43"
        className="icon-base"
        aria-hidden="true"
      >
        <ellipse
          cx="56"
          cy="21"
          rx="56"
          ry="21"
          fill="#2C1250"
          opacity=".6"
        />
      </svg>

      <img
        src={icon}
        alt="Technology icon"
        className="icon-img"
        loading="lazy"
      />

      {PARTICLES.map((particle, index) => (
        <span
          key={index}
          className="particle"
          style={particle}
        />
      ))}

    </Box>
  );
}

export default IconPlatform;