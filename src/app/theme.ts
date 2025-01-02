import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#b3e5fc",
      light: "#b2ebf2",
      dark: "#4dd0e1",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      "@media (min-width:600px)": {
        fontSize: "3.5rem",
      },
    },
    h2: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
    },
    h3: {
      fontSize: "1.75rem",
      "@media (min-width:600px)": {
        fontSize: "2.4rem",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 16,
          paddingRight: 16,
          "@media (min-width:600px)": {
            paddingLeft: 24,
            paddingRight: 24,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontSize: "1rem",
          padding: "0.5rem 1.5rem",
          "@media (min-width:600px)": {
            padding: "0.75rem 2rem",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
          },
        },
      },
    },
  },
});
