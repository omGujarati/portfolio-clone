import React, { useState, useEffect } from "react";
import "@fontsource/preahvihear";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import HamburgerButton from "../../shared/HamburgerButton";

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


  return (
    <> <AppBar
      data-aos="fade-down"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
      elevation={0}
      position="fixed"
      className="header-appbar "
    >


      <Toolbar className="header-toolbar container flex-between">
        <Box
          component="img"
          src="/images/Logo.png"
          className="header-logo"
        />

        {!mobile && (
          <Box className="header-nav flex-align-center">
            {["Home", "About", "Lab"].map((item) => (
              <Typography
                key={item}
                className="nav-item"
              >
                {item}
              </Typography>
            ))}
          </Box>
        )}

      </Toolbar>
    </AppBar>

      {mobile && (
        <Box className="mobile-hamburger">
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
        ModalProps={{ keepMounted: true }}
        PaperProps={{ className: "mobile-drawer" }}
      >

        <List className="drawer-list">
          {["Home", "About", "Lab"].map((item) => (
            <ListItem key={item} disablePadding>
              <Typography
                className="drawer-item"
                onClick={() => setOpen(false)}
              >
                {item}
              </Typography>
            </ListItem>
          ))}
        </List>

      </Drawer>
    </>


  );
}

export default Header;
