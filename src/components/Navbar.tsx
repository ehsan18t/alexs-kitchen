"use client";

import {
  alpha,
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { RiMenu4Fill } from "react-icons/ri";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Food",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/",
  },
];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const name = "Alex's Kitchen";

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h5"
        sx={{
          color: "#557174",
          my: 2,
        }}
      >
        {name}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={`${item.name}-${item.href}_${index}`} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              className="hover:bg-primary/30"
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        color="transparent"
        sx={{ backdropFilter: "blur(10px)" }}
        component="nav"
      >
        <Toolbar className="flex justify-between">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <RiMenu4Fill color="#333 " />
          </IconButton>
          <img src="/logo.svg" className="h-16 py-1" alt="" />
          <Box
            bgcolor={alpha("#f4f4f4", 0.8)}
            borderRadius={2}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {navItems.map((item) => (
              <Button
                component={Link}
                href={item.href}
                className="hover:bg-primary/30"
                key={`${item.name}-${item.href}`}
                sx={{ color: "GrayText" }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
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
