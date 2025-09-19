"use client";

import { MutedButton } from '@/components/ui/muted-button';
import { Box, Stack, Typography } from '@mui/material';

const BlogCategories = () => {
  return (
    <Box>
      <Typography variant="h6">
        Discover more
      </Typography>
      <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1, mt: 2 }}>
        <MutedButton>
          Test
        </MutedButton>
        <MutedButton>
          Test
        </MutedButton>
        <MutedButton>
          Test
        </MutedButton>
        <MutedButton>
          Test
        </MutedButton>
        <MutedButton>
          Test
        </MutedButton>
      </Stack>
    </Box>
  );
};

export default BlogCategories;