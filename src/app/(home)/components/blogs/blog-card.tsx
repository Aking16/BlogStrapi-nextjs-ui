"use client";

import { BlogCategoryType, BlogType } from "@/types/blogs";
import { Box, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface BlogCardProps extends BlogType {
  category: BlogCategoryType;
}

const BlogCard: FC<BlogCardProps> = ({
  id,
  title,
  subTitle,
  readDuration,
  image,
  category,
}) => {
  return (
    <Stack
      component={Link}
      href={`/blog/${id}`}
      direction="row"
      spacing={2}
      sx={(theme) => ({
        p: 2,
        borderRadius: 0.5,
        mt: 5,
        "&:first-of-type": {
          mt: 0,
        },
        color: "inherit",
        textDecoration: "none",
        ":hover": {
          backgroundColor: alpha(theme.palette.primary.main, 0.03),
        },
      })}
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
      <Image
        src={image}
        alt="img"
        width={150}
        height={150}
        style={{ borderRadius: 10 }}
      />
    </Stack>
  );
};

export default BlogCard;
