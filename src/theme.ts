'use client'

import { createTheme } from '@mui/material/styles'
import { Noto_Sans_Thai } from 'next/font/google'

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-sans-thai',
})

const theme = createTheme({
  typography: {
    fontFamily: notoSansThai.style.fontFamily,
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#6A79FA',
    },
    secondary: {
      main: '#D701A2',
    },
    grey: {
      400: '#ADB7BE',
      500: '#333336',
    },
    background: {
      paper: '#232426',
      default: '#232426',
    },
  },
  shape: {
    borderRadius: 6,
  },
  spacing: 8,
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
          backgroundColor: '#333336',
          color: '#ffffff',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none', // Remove underline
          '&:hover': {
            textDecoration: 'underline',
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
          background: 'linear-gradient(to right, #400ED3 0%, #5562FC 100%)',

          '&:hover': {
            background: 'linear-gradient(to right, #5562FC 0%, #400ED3 100%)',
          },
        },
        outlined: {
          color: '#fff',
          border: `2px solid #6A79FA`,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        sizeSmall: {
          width: 20,
          height: 20,

          '& .MuiIcon-root': {
            fontSize: 14,
          },
        },
        sizeMedium: {
          width: 30,
          height: 30,

          '& .MuiIcon-root': {
            fontSize: 24,
          },
        },
        root: {
          color: '#ADB7BE',
          background: '#333235',

          '&:hover': {
            background: '#444444',
          },
        },
        colorPrimary: {
          background: 'linear-gradient(to right, #400ED3 0%, #5562FC 100%)',
          color: '#FFF',
          '&:hover': {
            background: 'linear-gradient(to right, #5562FC 0%, #400ED3 100%)',
          },
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: {
            color: 'gradient',
          },
          style: {
            background: 'linear-gradient(180deg, #FFFFFF 50%, #999999 110.42%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          },
        },
        {
          props: {
            variant: 'h3',
          },
          style: {
            fontSize: 36,
          },
        },
      ],
    },
  },
})

export default theme
