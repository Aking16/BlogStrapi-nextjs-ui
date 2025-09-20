import { IconButton } from "@mui/material";
import React from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useColorScheme } from "@mui/material/styles";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const ThemeToggler = () => {
  const { mode, setMode } = useColorScheme();

  return (
    <IconButton onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
      {mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
    </IconButton>
  );
};

export default ThemeToggler;
