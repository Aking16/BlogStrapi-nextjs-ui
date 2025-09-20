"use client";

import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const Item = styled("div")(() => ({
  height: "200px",
  width: "308px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  "& img": {
    objectFit: "cover",
  },
}));

export default function ImageLayout() {
  return (
    <Box sx={{ p: 2 }}>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <Image
          src="/images/hero-img-1.png"
          alt="Bed"
          width={200}
          height={200}
        />
        <Image
          src="/images/hero-img-1.png"
          alt="Bed"
          width={200}
          height={200}
        />
        <Image
          src="/images/hero-img-1.png"
          alt="Bed"
          width={200}
          height={200}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Item>
          <Image
            src="/images/hero-img-1.png"
            alt="Bed"
            width={308}
            height={200}
          />
        </Item>
        <Item>
          <Image
            src="/images/hero-img-1.png"
            alt="Bed"
            width={308}
            height={200}
          />
        </Item>
      </Stack>
    </Box>
  );
}
