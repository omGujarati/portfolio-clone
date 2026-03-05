import React, { useState,} from "react";
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
import "aos/dist/aos.css";
import HamburgerButton from "../../shared/HamburgerButton";

const NAV_ITEMS = ["Home", "About", "Lab"];

function Header() {

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => {
    setOpen(prev => !prev);
  };

  return (
    <>
      <AppBar
        data-aos="fade-down"
        elevation={0}
        position="fixed"
        className="header-appbar"
      >
        <Toolbar className="header-toolbar container flex-between">

          <Box
            component="img"
            src="/images/Logo.png"
            alt="Portfolio Logo"
            className="header-logo"
          />

          {!mobile && (
            <Box className="header-nav flex-align-center">
              {NAV_ITEMS.map((item) => (
                <Typography key={item} className="nav-item">
                  {item}
                </Typography>
              ))}
            </Box>
          )}

        </Toolbar>
      </AppBar>

      {mobile && (
        <Box className="mobile-hamburger">
          <HamburgerButton open={open} toggle={toggleDrawer} />
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
          {NAV_ITEMS.map((item) => (
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