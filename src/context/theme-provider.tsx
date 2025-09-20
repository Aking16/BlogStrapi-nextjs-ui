"use client";

import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { FC, ReactNode } from "react";

import "@fontsource/source-sans-pro/200.css";
import "@fontsource/source-sans-pro/300.css";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/600.css";
import "@fontsource/source-sans-pro/700.css";
import "@fontsource/source-sans-pro/900.css";
import NextTopLoader from "nextjs-toploader";

interface ThemeProviderProps {
  children: ReactNode;
}

export const theme = createTheme({
  typography: {
    fontFamily: '"Source Sans Pro", serif',
  },
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: "#fff",
        },
      },
    },
    light: {
      palette: {
        primary: {
          main: "#000",
        },
      },
    },
  },
  shape: {
    borderRadius: 28,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28,
          paddingLeft: 16,
          paddingRight: 16,
        },
        contained: ({ theme }) => ({
          ...(theme.palette.mode === "light" && {
            backgroundColor: "black",
            color: "white",
          }),
        }),
        outlined: ({ theme }) => ({
          ...(theme.palette.mode === "light" && {
            borderColor: "black",
            color: "#676767",
          }),
        }),
        text: ({ theme }) => ({
          color: theme.palette.text.secondary,
        }),
      },
    },
  },
});

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <NextTopLoader color={theme.palette.secondary.main} />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
