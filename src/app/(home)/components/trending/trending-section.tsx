import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Box, Grid, Stack, Typography } from "@mui/material";
import TrendingCard from "./trending-card";

const TrendingSection = () => {
  return (
    <Box>
      <Stack direction="row" spacing={1} alignItems="center" mb={4}>
        <TrendingUpIcon />
        <Typography variant="h6" fontWeight="bold">
          Trending on BlogStrapi
        </Typography>
      </Stack>
      <Grid container spacing={2} columns={{ sm: 2, md: 4 }}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Grid key={index} size={1}>
            <TrendingCard
              title="Test Title"
              author="Aking"
              updatedAt="2024-01-01"
              index={index}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TrendingSection;
