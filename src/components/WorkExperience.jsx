import React from "react";
import "@fontsource/preahvihear";
import {
  Box,
  Typography,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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

  const ExperienceCard = ({ icon, variant, type, aos, delay }) => {
    const gradient =
      variant === "right"
        ? "linear-gradient(90deg,#120028 0%,#2a0f4f 100%)"
        : `linear-gradient(
            104deg,
            #130428 0.58%,
            #251043 16.32%,
            #38126D 29.33%,
            #261045 45.66%,
            #190634 54.44%
          )`;

    return (
      <Box data-aos={aos}
        data-aos-delay={delay}
        data-aos-duration="900">
        <Box
          sx={{
            position: "relative",
            borderRadius: "22px",
            padding: { xs: "20px", sm: 4 },
            textAlign: { xs: "center", sm: "left" },
            background: gradient,
            border: "1px solid rgba(123,47,190,.35)",
            transition: ".3s",
            overflow: 'hidden',

            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow:
                "0 30px 80px rgba(123,47,190,.45)",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              width: "100%",
              height: 2,
              background:
                "linear-gradient(90deg,transparent,#9B59D8,transparent)",

            }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              flexWrap: { xs: "wrap", sm: "nowrap" },
            }}
          >
            <IconPlatform icon={icon} />

            <Box>
              <Typography
                sx={{
                  fontFamily: "Preahvihear",
                  fontSize: 22,
                  color: "#fff",
                  mb: 1,
                }}
              >
                CIB on the Mobile
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,.65)",
                  fontSize: 14,
                  mb: 2,
                  maxWidth: 420,
                }}
              >
                Take your client onboard seamlessly by our
                amazing tool of digital onboarding process.
              </Typography>

              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",

                  px: "28px",
                  py: "12px",

                  fontFamily: "Preahvihear",
                  fontSize: "13px",
                  letterSpacing: "1px",
                  color: "#FFFFFF",

                  borderRadius: "10px",

                  border: "1.5px solid rgba(155,89,216,.6)",

                  background:
                    "linear-gradient(180deg, rgba(155,89,216,.12), rgba(155,89,216,.04))",

                  boxShadow: `
                  inset 0 0 12px rgba(155,89,216,.25),
                  0 0 0 rgba(155,89,216,0)
                  `,

                  cursor: "pointer",
                  transition: "all .35s ease",

                  "&:hover": {
                    border: "1.5px solid #9B59D8",

                    background:
                      "linear-gradient(180deg, rgba(155,89,216,.25), rgba(155,89,216,.08))",

                    boxShadow: `
                    inset 0 0 18px rgba(155,89,216,.45),
                    0 0 18px rgba(155,89,216,.35)
                    `,

                    transform: "translateY(-1px)",
                  },
                }}
              >
                LEARN MORE
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  const IconPlatform = ({ icon }) => {
    return (
      <Box
        sx={{
          position: "relative",
          width: 120,
          height: 100,
          flexShrink: 0,
          mx: { xs: "auto", sm: 0 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 110,
            height: 35,
            background:
              "radial-gradient(ellipse,#2C1250,transparent)",
            filter: "blur(18px)",
            borderRadius: "50%",
          }}
        />

        <Box
          component="svg"
          width="112px"
          height="43px"
          viewBox="0 0 112 43"
          sx={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <ellipse
            cx="56"
            cy="21"
            rx="56"
            ry="21"
            fill="#2C1250"
            opacity=".6"
          />
        </Box>

        <Box
          component="img"
          src={icon}
          sx={{
            width: 80,
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        {[
          { top: 6, left: 8, color: "#7B2FBE" },
          { top: 30, right: 6, color: "#fff" },
          { bottom: 18, right: 20, color: "#A259FF" },
          { bottom: 32, left: 6, color: "#D9D9D9" },
        ].map((d, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: 5,
              height: 5,
              borderRadius: "50%",
              bgcolor: d.color,
              ...d,
            }}
          />
        ))}
      </Box>
    );
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          // background: "#0A0015",
          background: "#11071F",
          py: 14,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "625px",
            height: "700px",
            left: "50%",
            top: "55%",
            transform: "translate(-50%, -60%)",

            background:
              "radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50,15,133,0) 100%)",
            opacity: 0.7,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            maxWidth: "1440px",
            mx: "auto",
            px: { xs: 2, sm: 4, md: 6, lg: "112px" },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography data-aos='fade-down'
            sx={{
              fontFamily: "Preahvihear",
              fontSize: { xs: 36, sm: 44 },
              color: "#fff",
              mb: 6,
            }}
          >
            Work Experience
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              gap: 4,
            }}
          >
            {DATA.map((item, i) => (
              <ExperienceCard
                key={i}
                {...item}
                aos={
                  i % 2 === 0 ? "fade-right" : "fade-left"
                }
                delay={i * 150}
              />
            ))}
          </Box>
        </Box>
      </Box>

    </>
  )
}

export default WorkExperience