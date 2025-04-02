import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => (
  <BottomNavigation showLabels>
    <BottomNavigationAction label="Facebook" icon={<Facebook />} />
    <BottomNavigationAction label="Twitter" icon={<Twitter />} />
    <BottomNavigationAction label="Instagram" icon={<Instagram />} />
  </BottomNavigation>
);

export default Footer;
