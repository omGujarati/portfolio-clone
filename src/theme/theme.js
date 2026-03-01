import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#9757d3",
      light: "#a261ff",
    },

    background: {
      default: "#11071f",
      paper: "#190b2d",
    },

    text: {
      primary: "#ffffff",
      secondary: "#ccd6f6",
    },
  },

  typography: {
    fontFamily: "Plus Jakarta Sans, sans-serif",

    h6: {
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "26px",
    },
  },

  shape: {
    borderRadius: 10,
  },

  shadows: [
    "none",
    "0px 6px 22px #00000019",
  ],
});

export default theme; 