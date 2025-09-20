import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { Button, IconButton, Typography } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { FC } from "react";

interface ThemeTogglerProps {
  iconOnly?: boolean;
}

const ThemeToggler: FC<ThemeTogglerProps> = ({ iconOnly }) => {
  const { mode, setMode } = useColorScheme();

  if (iconOnly) {
    return (
      <IconButton onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
        {mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
      </IconButton>
    );
  }

  return (
    <Button
      sx={{ gap: 0.5 }}
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      {mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
      <Typography>{mode}</Typography>
    </Button>
  );
};

export default ThemeToggler;
