"use client";

import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import React, { FC, ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

export const theme = createTheme({
  shape: {
    borderRadius: 28
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28,
          paddingLeft: 16,
          paddingRight: 16,
        },
        contained: {
          backgroundColor: "black",
          color: "white"
        },
        text: {
          color: "#676767"
        },
        outlined: {
          borderColor: "black",
          color: "#676767"
        }
      },
    },
  },
});

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>

  );
};

export default ThemeProvider;