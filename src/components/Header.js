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
    { label: "Settings", path: "/settings" },
  ];

  return (
    <>
      <AppBar position="static" sx={{ background: "#333" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navLinks.map(({ label, path }) => (
              <Button
                key={label}
                color="inherit"
                component={Link}
                to={path}
                sx={{
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "white",
                    transform: "scaleX(0)",
                    transition: "transform 0.3s ease-in-out",
                  },
                  "&:hover::after": {
                    transform: "scaleX(1)",
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          <IconButton
            color="inherit"
            onClick={toggleDrawer}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

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
