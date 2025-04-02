import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setOpen(true)}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Page
          </Typography>
          <Button
            color="inherit"
            sx={{ display: { xs: "none", md: "inline-block" } }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            sx={{ display: { xs: "none", md: "inline-block" } }}
          >
            About
          </Button>
          <Button
            color="inherit"
            sx={{ display: { xs: "none", md: "inline-block" } }}
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItem button onClick={() => setOpen(false)}>
            Home
          </ListItem>
          <ListItem button onClick={() => setOpen(false)}>
            About
          </ListItem>
          <ListItem button onClick={() => setOpen(false)}>
            Contact
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
