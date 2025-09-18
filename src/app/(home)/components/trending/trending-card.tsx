import { TrendingType } from '@/types/trending';
import { Box, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';

interface TrendingCardProps extends TrendingType {
  index: number;
}

const TrendingCard: FC<TrendingCardProps> = ({ title, author, updatedAt, index }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Typography fontSize="1.25rem" color="textDisabled">
        {(index + 1).toString().padStart(2, '0')}
      </Typography>
      <Box>
        <Typography>
          {title}
        </Typography>
        <Typography variant="subtitle2" color="textDisabled">
          {author} • {updatedAt}
        </Typography>
      </Box>
    </Stack>
  );
};

export default TrendingCard;