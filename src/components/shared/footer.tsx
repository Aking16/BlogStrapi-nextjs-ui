"use client";

import {
  Box,
  Container,
  Stack,
  Typography,
  Link as MUILink,
} from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        borderTop: `1px solid ${theme.palette.divider}`,
        py: 3,
        mt: 8,
        backgroundColor: theme.palette.background.paper,
      })}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Stack direction="row" spacing={3}>
            <MUILink
              component={Link}
              href="#"
              color="text.secondary"
              underline="hover"
            >
              About
            </MUILink>
            <MUILink
              component={Link}
              href="#"
              color="text.secondary"
              underline="hover"
            >
              Contact
            </MUILink>
            <MUILink
              component={Link}
              href="#"
              color="text.secondary"
              underline="hover"
            >
              Privacy
            </MUILink>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} BlogStrapi. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
