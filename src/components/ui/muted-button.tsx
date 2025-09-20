import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MutedButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  color: theme.palette.common.black,
  "&:hover": {
    backgroundColor: theme.palette.grey[300],
  },
}));
