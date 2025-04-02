import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "People", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <AppBar position="static" sx={{ background: "#333" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>

          {/* Desktop Navigation (Hidden on Small Screens) */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navLinks.map(({ label, path }) => (
              <Button key={label} color="inherit" component={Link} to={path}>
                {label}
              </Button>
            ))}
          </Box>

          {/* Mobile Hamburger Menu (Visible on Small Screens) */}
          <IconButton
            color="inherit"
            onClick={toggleDrawer}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer with the Same Functionality as Desktop Menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        sx={{ "& .MuiDrawer-paper": { width: 250 } }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {navLinks.map(({ label, path }) => (
              <ListItem button key={label} component={Link} to={path}>
                <ListItemText primary={label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
