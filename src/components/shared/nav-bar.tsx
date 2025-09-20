"use client";

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "@/components/ui/search-input";
import ThemeToggler from "@/components/ui/theme-toggler";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/material";
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
import { useState } from "react";

const drawerWidth = 240;
const navItems = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "write",
    href: "/write",
  },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        BlogStrapi
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
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
          <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.title}
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
}
