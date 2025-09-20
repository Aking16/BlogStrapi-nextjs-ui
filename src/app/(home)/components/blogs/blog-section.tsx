import { Box, Stack } from "@mui/material";
import React from "react";
import BlogCard from "./blog-card";
import BlogCategories from "./blog-categories";

const BlogSection = () => {
  return (
    <Stack sx={{ my: 10 }} spacing={5} direction="row">
      <Box sx={{ width: "70%" }}>
        {Array.from({ length: 3 }).map((_, index) => (
          <BlogCard
            id="id"
            title="Lorem ipsum dolor sit amet"
            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque"
            body="test"
            readDuration={10}
            image="/images/hero-img-1.png"
            createdAt="2025-01-01"
            updatedAt="2025-01-01"
            category={{ id: "id", name: "test category" }}
            key={index}
          />
        ))}
      </Box>
      <Box>
        <BlogCategories />
      </Box>
    </Stack>
  );
};

export default BlogSection;
