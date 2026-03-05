import React from "react";
import { Box, Typography } from "@mui/material";
import { TypingText } from "../../shared/Typingtext";

function HeroTyping() {

  return (

    <Box data-aos="fade-up" data-aos-duration="1200">

      <Typography className="hero-typing">

        <TypingText
          texts={[
            "I'm a Software Engineer",
            "Full Stack Developer",
            "React + MERN Developer",
            "UI Focused Engineer",
          ]}
        />

      </Typography>

      <Typography className="hero-company">

        Currently, I am a Software Engineer at{" "}

        <span className="hero-facebook">

          <img
            src="/images/facebook.svg"
            alt="facebook icon"
            className="facebook-icon"
          />

          Facebook

        </span>

        ,

      </Typography>

      <Typography
        className="hero-description"
        data-aos="fade-up"
        data-aos-duration="1000"
      >

        A self-taught UI/UX designer functioning in the industry
        for 3+ years now. I make meaningful and delightful digital
        products balancing user needs and business goals.

      </Typography>

    </Box>

  );
}

export default HeroTyping;