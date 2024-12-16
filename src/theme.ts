"use client";

import { createTheme } from "@mui/material/styles";
import { Noto_Sans_Thai } from "next/font/google";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans-thai",
});

const theme = createTheme({
  typography: {
    fontFamily: notoSansThai.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#401CD6",
    },
    secondary: {
      main: "#D701A2",
    },
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none", // Remove underline
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        contained: {
          background: "linear-gradient(to right, #400ED3 0%, #5562FC 100%)",

          "&:hover": {
            background: "linear-gradient(to right, #5562FC 0%, #400ED3 100%)",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          background: "linear-gradient(to right, #400ED3 0%, #5562FC 100%)", // Optional styling
          color: "#FFF",
          "&:hover": {
            background: "linear-gradient(to right, #5562FC 0%, #400ED3 100%)",
          },
        },
      },
    },
  },
});

export default theme;
