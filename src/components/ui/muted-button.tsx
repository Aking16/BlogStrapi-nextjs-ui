import { Button } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const MutedButton = styled(Button)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  color: theme.palette.text.primary,
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
  },
}));
