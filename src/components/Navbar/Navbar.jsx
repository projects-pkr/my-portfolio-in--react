import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  IconButton,
  Drawer,
  List,
  ListItemButton,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ProfilePhoto from "../../assets/NavbarImages/profile image.png";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const buttonStyle = {
    background: "linear-gradient(45deg, #FF6B6B, #FFD93D)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "16px",
    textTransform: "uppercase",
    fontWeight: 600,
    margin: "0 10px",
    textDecoration: "none",
  };

  const activeStyle = {
    ...buttonStyle,
    WebkitTextFillColor: "#FFD93D",
    fontWeight: 700,
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <AppBar sx={{ backgroundColor: "#333" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            alt="Pradeep Kumar"
            src={ProfilePhoto}
            sx={{ width: 70, height: 70, border: "2px solid #ffcc00" }}
          />
          <Typography
            variant="h6"
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#fff",
              letterSpacing: "1px",
            }}
          >
            Pradeep Kumar
          </Typography>
        </Box>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              style={({ isActive }) => (isActive ? activeStyle : buttonStyle)}
            >
              {link.name}
            </NavLink>
          ))}
        </Box>

        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { sm: "none" } }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#333",
              color: "#fff",
              width: "70%",
            },
          }}
        >
          <List>
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "#FFD93D" : "#fff",
                  fontWeight: isActive ? "bold" : "normal",
                })}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemButton>
                  <Typography sx={{ fontSize: "18px" }}>{link.name}</Typography>
                </ListItemButton>
              </NavLink>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
