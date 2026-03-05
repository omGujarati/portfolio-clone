import React from "react";
import { Box, Typography } from "@mui/material";
import IconPlatform from "./IconPlatform";

function ExperienceCard({ icon, variant, aos, delay }) {

  const gradientClass =
    variant === "right" ? "gradient-right" : "gradient-left";

  return (

    <Box
      data-aos={aos}
      data-aos-delay={delay}
      data-aos-duration="900"
    >

      <Box className={`work-card ${gradientClass}`}>
        <Box className="card-line" />

        <Box className="card-flex flex-align-center">

          <IconPlatform icon={icon} />

          <Box>

            <Typography className="card-title">
              CIB on the Mobile
            </Typography>

            <Typography className="card-desc">
              Take your client onboard seamlessly by our
              amazing tool of digital onboarding process.
            </Typography>

            <Box className="learn-btn">
              LEARN MORE
            </Box>

          </Box>

        </Box>

      </Box>

    </Box>

  );
}

export default ExperienceCard;