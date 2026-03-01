import React from "react";
import "@fontsource/preahvihear";
import {
  Box,
  Typography,
} from "@mui/material";
import { TypingText } from "../ui/typingtext";
import { DecryptText } from "../ui/decryptText";

import VanillaTilt from "vanilla-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";

function Hero() {

  const tiltRef = useRef(null);

  useEffect(() => {
    const tiltNode = tiltRef.current;

    VanillaTilt.init(tiltNode, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
      scale: 1.05,
      perspective: 1000,
    });

    return () => {
      tiltNode.vanillaTilt.destroy();
    };
  }, []);

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
    <>
      <Box
        sx={{
          position: "relative",
          pt: { xs: "110px", md: "140px", lg: "180px" },
          pb: { xs: 9, md: 14 },
          // background: "#0A0015",
          background: "#11071F",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            maxWidth: "1440px",
            mx: "auto",
            px: { xs: 2, sm: 4, md: 6, lg: "112px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "flex-start",
              mb: { xs: 10, md: 12 },
              position: "relative",

            }}
          >
            <Box data-aos="zoom-out" data-aos-duration="900"
              sx={{
                position: "relative",
                width: 300,
                height: 360,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: { xs: "auto", md: 0 },
              }}
            >

              <Box
                sx={{
                  position: "absolute",
                  width: { sm: 385, xs: 340 },
                  height: { sm: 431, xs: 386 },
                  background:
                    "radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50,15,133,0) 100%)",
                  zIndex: 0,
                }}
              />

              <Box
                component="svg"
                // width="258px"
                // height="259px"
                viewBox="0 0 258 259"
                sx={{
                  position: "absolute",
                  zIndex: 1,
                  width: { sm: 258, xs: 220 },
                  height: { sm: 259, xs: 221 },
                }}
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
                alt="profile"
                sx={{
                  width: { sm: 210, xs: 170 },
                  position: "relative",
                  zIndex: 3,
                  transformStyle: "preserve-3d",
                }}
              />

              <Box
                component="img"
                src="/images/Arrow.png"
                sx={{
                  position: "absolute",
                  top: -30,
                  right: -10,
                  width: { xs: 80, md: 120 },
                  display: { xs: 'none', md: 'block', lg: 'block', xl: 'block' },
                }}

              />
            </Box>

            <Box sx={{ maxWidth: 520 }}>
              {/* HELLO TEXT */}
              <Typography data-aos="fade-left" data-aos-duration="1000"
                sx={{
                  fontFamily: "Preahvihear",
                  fontSize: { xm: 17, sm: 19 },
                  color: "#fff",
                  mb: { xs: 5, xm: 7, md: 9 },
                  mt: { xs: 6, md: 0 },
                }}
              >
                Hello! I Am{" "}
                <Box component="span" sx={{ color: "#7127ba" }}>
                  <DecryptText text="Ibrahim Memon" />
                </Box>
              </Typography>

              <Box data-aos="fade-left" data-aos-duration="1100" sx={{ ml: { md: 5 } }}>

                <Typography
                  sx={{
                    fontFamily: "Preahvihear",
                    fontSize: { sm: 18, },
                    textDecoration: "underline",
                    color: "#fff",
                    mb: { sm: 1.5 },
                  }}
                >
                  A Designer who
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Preahvihear",
                    fontSize: { xs: 35, sm: 45, md: 50 },
                    lineHeight: "63px",
                    color: "#fff",
                  }}
                >
                  Judges a book <br />
                  by its{" "}

                  <Box
                    component="span"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      color: "#7127ba",
                    }}
                  >
                    cover

                    <Box
                      component="svg"
                      viewBox="0 0 300 120"
                      preserveAspectRatio="none"
                      sx={{
                        position: "absolute",
                        left: "-10%",
                        width: "130%",
                        height: "110%",
                        pointerEvents: "none",
                        top: '-12%',
                        transform: "rotate(-4.5deg)",
                      }}
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
                    </Box>
                  </Box>

                  ...
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    fontSize: { xs: 12, sm: 14 },
                    color: "#fff",
                    opacity: 0.8,
                    fontFamily: "Preahvihear",
                  }}
                >
                  Because if the cover does not impress you what else can?
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box data-aos="fade-up" data-aos-duration="1200">
            <Typography
              sx={{
                fontFamily: "Preahvihear",
                fontSize: { xs: 36, sm: 45, md: 50 },
                lineHeight: { sm: "50px", md: "90px" },
                color: "#FFFFFF",
                marginBottom: { xs: 1.5, sm: 1.5, md: 0 },
              }}
            >
              <TypingText
                texts={[
                  "I'm a Software Engineer",
                  "Full Stack Developer",
                  "React + MERN Developer",
                  "UI Focused Engineer",
                ]}
              />
            </Typography>

            <Typography sx={{
              color: "#FFFFFF",
              fontSize: { xs: 18, sm: 21 },
              fontFamily: "Preahvihear",
            }}>
              Currently, I am a Software Engineer at{" "}
              <Box component="span" sx={{ color: "#1877F2" }}>
                <Box
                  component="img"
                  src="/images/facebook.svg"
                  sx={{
                    verticalAlign: "middle",
                    pb: 0.5,
                    mr: 0.7,
                  }}
                >
                </Box>
                Facebook
              </Box>
              ,
            </Typography>

            <Typography data-aos="fade-up" data-aos-duration="1000"
              sx={{
                mt: 9,
                maxWidth: 865,
                lineHeight: "39px",
                fontSize: { xs: 18, sm: 22 },
                color: "#FFFFFF",
                fontFamily: "Preahvihear",
              }}
            >
              A self-taught UI/UX designer functioning in the industry
              for 3+ years now. I make meaningful and delightful digital
              products balancing user needs and business goals.
            </Typography>
          </Box>
        </Box>
      </Box >
    </>
  )
}

export default Hero