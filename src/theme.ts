"use client"

import { createTheme } from "@mui/material/styles"
import { Noto_Sans_Thai } from "next/font/google"

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans-thai",
})

const theme = createTheme({
  typography: {
    fontFamily: notoSansThai.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#6A79FA",
    },
    secondary: {
      main: "#D701A2",
    },
    grey: {
      500: "#333336",
    },
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: 22,
          borderRadius: 6,
          height: 39,
        },
        colorDefault: {
          backgroundColor: "#333336",
          color: "#ffffff",
        },
      },
    },
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
        sizeSmall: {
          width: 20,
          height: 20,

          "& .MuiIcon-root": {
            fontSize: 14,
          },
        },
        root: {
          color: "#ADB7BE",
          background: "#333235",

          "&:hover": {
            background: "#444444",
          },
        },
        colorPrimary: {
          background: "linear-gradient(to right, #400ED3 0%, #5562FC 100%)",
          color: "#FFF",
          "&:hover": {
            background: "linear-gradient(to right, #5562FC 0%, #400ED3 100%)",
          },
        },
      },
    },
  },
})

export default theme
