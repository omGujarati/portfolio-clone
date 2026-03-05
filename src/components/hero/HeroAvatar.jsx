import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import VanillaTilt from "vanilla-tilt";

function HeroAvatar() {

  const tiltRef = useRef(null);

  useEffect(() => {

    const tiltNode = tiltRef.current;

    if (!tiltNode) return;

    VanillaTilt.init(tiltNode, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
      scale: 1.05,
      perspective: 1000,
    });

    return () => {
      if (tiltNode.vanillaTilt) {
        tiltNode.vanillaTilt.destroy();
      }
    };

  }, []);

  return (
    <Box
      className="hero-avatar flex-center"
      data-aos="zoom-out"
      data-aos-duration="900"
    >

      <Box className="avatar-glow" />

      <Box
        component="svg"
        viewBox="0 0 258 259"
        className="avatar-svg"
      >
        <defs>
          <radialGradient
            id="avatarGlow"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(129 129.5) rotate(90) scale(129.5 129)"
          >
            <stop offset="0.177083" stopColor="white" />
            <stop offset="1" stopColor="#434343" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse
          cx="129"
          cy="129.5"
          rx="129"
          ry="129.5"
          fill="url(#avatarGlow)"
        />
      </Box>

      <Box
        ref={tiltRef}
        component="img"
        src="/images/me.png"
        alt="Ibrahim Memon profile"
        className="profile-img"
      />

      <Box
        component="img"
        src="/images/Arrow.png"
        alt="decorative arrow"
        className="arrow-img"
      />

    </Box>
  );
}

export default HeroAvatar;