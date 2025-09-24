"use client";

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "@/components/ui/search-input";
import ThemeToggler from "@/components/ui/theme-toggler";
import { LinkType, LogoType } from "@/types/elements";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Stack, useColorScheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FC, useState } from "react";
import { StrapiImage } from "../ui/strapi-image";

interface HeaderProps {
  logo: LogoType;
  links: LinkType[];
}

const drawerWidth = 240;

export const Header: FC<HeaderProps> = ({ logo, links }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode } = useColorScheme();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Stack
        direction="row"
        sx={{ my: 2, alignItems: "center", justifyContent: "center" }}
      >
        <StrapiImage
          alt={logo.alternativeText}
          src={logo.image}
          width={24}
          height={24}
          style={{ filter: mode === "dark" ? "invert(1)" : "invert(0)" }}
        />
        <Typography variant="h6">BlogStrapi</Typography>
      </Stack>
      <Divider />
      <List>
        {links.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Stack spacing={1}>
        <Button variant="contained">Register</Button>
        <ThemeToggler />
      </Stack>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", padding: 5 }}>
      <CssBaseline />
      <AppBar
        component="nav"
        variant="outlined"
        sx={(theme) => ({
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          backgroundColor: theme.palette.background.default,
        })}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", md: "flex", alignItems: "center" },
            }}
          >
            <StrapiImage
              alt={logo.alternativeText}
              src={logo.image}
              width={24}
              height={24}
              style={{ filter: mode === "dark" ? "invert(1)" : "invert(0)" }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={(theme) => ({
                display: { xs: "none", md: "block" },
                mr: 3,
                color: theme.palette.text.primary,
              })}
            >
              BlogStrapi
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
            {links.map((item) => (
              <Button
                key={item.id}
                variant="text"
                LinkComponent={Link}
                href={item.href}
              >
                {item.title}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <ThemeToggler iconOnly />
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button variant="contained">Register</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};
