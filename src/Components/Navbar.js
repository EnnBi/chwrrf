import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { menuItems } from "../data/Constants";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleDonateNowClick = () => {
    const footerElement = document.getElementById("footer");
    footerElement.scrollIntoView({ behavior: "smooth" });
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "white", height: 65, mb: 0 }}
      >
        <Container maxWidth="xxl">
          <Toolbar>
            <Avatar
              alt="CHWRRF Logo"
              src={process.env.PUBLIC_URL + "/images/logo-2.png"}
              sx={{
                width: 50,
                height: 50,
                ml: 8,
                mr: 8,
                display: { xs: "none", md: "flex" },
              }}
              variant="rounded"
            />

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
                PaperProps={{
                  style: {
                    width: "200px",
                    marginLeft: "0",
                  },
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem key={item.route} onClick={handleCloseNavMenu}>
                    <Typography
                      className={item.isActive ? "active-nav-link" : ""}
                    >
                      <ScrollLink
                        activeClass="active"
                        to={item.target}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={200}
                      >
                        {item.route}
                      </ScrollLink>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Avatar
              alt="CHWRRF Logo"
              src={process.env.PUBLIC_URL + "/images/logo-2.png"}
              sx={{
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                display: { xs: "flex", sm: "flex", md: "none" },
                marginRight: 20,
              }}
              variant="rounded"
            />

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                ml: 30,
                alignItems: "center",
              }}
            >
              {menuItems.map((item) => (
                <MenuItem key={item.route} onClick={handleCloseNavMenu}>
                  <Typography
                  // className={item.isActive ? "active-nav-link" : ""}
                  >
                    <ScrollLink
                      activeClass="active"
                      to={item.target}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={200}
                    >
                      {item.route}
                    </ScrollLink>
                  </Typography>
                </MenuItem>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }}>
                <Button
                  variant="contained"
                  sx={{
                    fontWeight: 600,
                    display: { xs: "none", sm: "none", md: "flex" },
                    height: "40px",
                    width: "150px",
                    fontSize: "14px",
                    backgroundColor: "#f8b864",
                    "&:hover": {
                      textDecoration: "underline",
                      backgroundColor: "#f8b864",
                    },
                  }}
                  onClick={handleDonateNowClick}
                >
                  Donate Now
                </Button>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
