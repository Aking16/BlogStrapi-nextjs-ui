import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ImageLayout from "./image-layout";

const HeroSection = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", my: 8 }}>
      <Stack spacing={4} sx={{ flexGrow: 1 }}>
        <Typography variant="h1" fontWeight="bold">
          Stay curious.
        </Typography>
        <Typography variant="body1">
          Discover stories, thinking, and expertise from writers on any topic.
        </Typography>
        <Button variant="contained" sx={{ width: "fit-content", p: 2 }}>
          Start reading
        </Button>
      </Stack>

      <ImageLayout />
    </Box>
  );
};

export default HeroSection;
