import { BlogCategoryType, BlogType } from "@/types/blogs";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

interface BlogCardProps extends BlogType {
  category: BlogCategoryType;
}

const BlogCard: FC<BlogCardProps> = ({
  title,
  subTitle,
  readDuration,
  image,
  category,
}) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        mt: 5,
        "&:first-of-type": {
          mt: 0,
        },
      }}
    >
      <Box>
        <Typography variant="subtitle2" color="textDisabled">
          {category.name} • {readDuration}
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>
        <Typography>{subTitle}</Typography>
      </Box>
      <Image src={image} alt="img" width={150} height={150} />
    </Stack>
  );
};

export default BlogCard;
