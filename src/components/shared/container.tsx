"use client";

import { styled } from "@mui/material/styles";

const Container = styled("div")(({ theme }) => ({
  overflow: "hidden",
  paddingRight: 10,
  paddingLeft: 10,
  [theme.breakpoints.up("md")]: {
    paddingRight: 32,
    paddingLeft: 32,
  },
}));

export default Container;
