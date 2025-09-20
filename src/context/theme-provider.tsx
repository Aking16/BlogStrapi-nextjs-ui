"use client";

import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import React, { FC, ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export const theme = createTheme({
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
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
