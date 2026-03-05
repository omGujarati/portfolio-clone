import React from "react";
import { Box, Typography } from "@mui/material";
import { DecryptText } from "../../shared/DecryptText";

function HeroIntro() {
  return (
    <Box className="hero-text">

      <Typography
        className="hero-intro"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        Hello! I Am{" "}
        <span className="hero-name">
          <DecryptText text="Ibrahim Memon" />
        </span>
      </Typography>

      <Box className="hero-about" data-aos="fade-left" data-aos-duration="1100">

        <Typography className="hero-designer">
          A Designer who
        </Typography>

        <Typography className="hero-title">
          Judges a book <br />

          by its{" "}

          <span className="cover-text">
            cover

            <svg
              viewBox="0 0 300 120"
              preserveAspectRatio="none"
              className="cover-svg"
              aria-hidden="true"
            >
              <ellipse
                cx="150"
                cy="60"
                rx="145"
                ry="50"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
              />
            </svg>

          </span>
          ...
        </Typography>

        <Typography className="hero-small-text">
          Because if the cover does not impress you what else can?
        </Typography>

      </Box>

    </Box>
  );
}

export default HeroIntro;