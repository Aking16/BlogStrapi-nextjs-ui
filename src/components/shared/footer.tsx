"use client";

import { LinkType } from "@/types/elements";
import {
  Box,
  Container,
  Link as MUILink,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { FC } from "react";

interface FooterProps {
  links: LinkType[];
  siteName: string;
}

const Footer: FC<FooterProps> = ({ links, siteName }) => {
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
            {links.map((item) => (
              <MUILink
                component={Link}
                href={item.href}
                color="text.secondary"
                underline="hover"
                key={item.id}
              >
                {item.title}
              </MUILink>
            ))}
          </Stack>

          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} {siteName}. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
