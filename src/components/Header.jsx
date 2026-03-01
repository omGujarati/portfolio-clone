import React, { useState } from "react";
import "@fontsource/preahvihear";

import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function Header() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
    AOS.refresh();
  }, []);


  const HamburgerButton = ({ open, toggle }) => (
    <IconButton
      onClick={toggle}
      sx={{
        width: 42,
        height: 42,
        position: "relative",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          width: 26,
          height: 18,
          position: "relative",
        }}
      >
        {/* TOP LINE */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "2px",
            background: "#fff",

            transformOrigin: "center",
            top: open ? "8px" : "0px",

            transform: open
              ? "rotate(45deg) scaleX(1.05)"
              : "rotate(0deg)",

            transition:
              "top .35s cubic-bezier(.77,0,.18,1), transform .45s cubic-bezier(.77,0,.18,1)",
          }}
        />

        {/* MIDDLE LINE */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "2px",
            background: "#fff",
            top: "8px",

            transform: open
              ? "scaleX(0)"
              : "scaleX(1)",

            opacity: open ? 0 : 1,

            transition:
              "transform .25s ease, opacity .2s ease",
          }}
        />

        {/* BOTTOM LINE */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "2px",
            background: "#fff",

            transformOrigin: "center",
            top: open ? "8px" : "16px",

            transform: open
              ? "rotate(-45deg) scaleX(1.05)"
              : "rotate(0deg)",

            transition:
              "top .35s cubic-bezier(.77,0,.18,1), transform .45s cubic-bezier(.77,0,.18,1)",
          }}
        />
      </Box>
    </IconButton>
  );


  return (
    <>
      <>
        <AppBar
          data-aos="fade-down"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          elevation={0}
          position="fixed"
          sx={{
            // background: "rgba(10,0,21,0.75)",
            background: "rgba(26,11,46,0.75)",
            backdropFilter: "blur(18px)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Toolbar
            sx={{
              height: { xs: 64, md: 88 },
              maxWidth: "1440px",
              width: "100%",
              mx: "auto",
              px: { xs: 2, sm: 4, md: 6, lg: "112px" },

              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box component="img"
              src="/images/Logo.png"
              sx={{ flexShrink: 0 }}
            />

            {!mobile && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "72px",
                }}
              >
                {["Home", "About", "Lab"].map((item) => (
                  <Typography
                    key={item}
                    sx={{
                      fontFamily: "Preahvihear",
                      fontSize: 16,
                      color: "rgba(255,255,255,0.75)",
                      cursor: "pointer",
                      transition: "all .25s ease",

                      position: "relative",

                      "&:hover": {
                        color: "#ffffff",
                      },

                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: -6,
                        width: 0,
                        height: "2px",
                        background:
                          "linear-gradient(90deg,#7127ba,#9B59D8)",
                        transition: ".3s",
                      },

                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            )}

          </Toolbar>
        </AppBar>
        {mobile && (
          <Box
            sx={{
              position: "fixed",
              top: { xs: 18, md: 28 },
              right: 20,
              zIndex: 1300,
              transition: "transform 0.45s cubic-bezier(.77,0,.18,1)",
            }}
          >
            <HamburgerButton
              open={open}
              toggle={() => setOpen(!open)}
            />
          </Box>
        )}

        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: 280,
              background: "linear-gradient(180deg,#110022,#0A0015)",
              backdropFilter: "blur(20px)",
              px: 4,
              pt: 10,
            },
          }}
        >

          <List sx={{ mt: 4 }}>
            {["Home", "About", "Lab"].map((item) => (
              <ListItem key={item} disablePadding>
                <Typography
                  onClick={() => setOpen(false)}
                  sx={{
                    fontFamily: "Preahvihear",
                    fontSize: 20,
                    py: 2,
                    color: "#fff",
                    cursor: "pointer",
                    transition: ".3s",

                    "&:hover": {
                      color: "#9B59D8",
                      transform: "translateX(6px)",
                    },
                  }}
                >
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </>
    </>
  )
}

export default Header