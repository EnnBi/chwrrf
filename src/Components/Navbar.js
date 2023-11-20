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
import { Link } from "react-router-dom";
import { menuItems } from "../data/Constants";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const toHome =()=>{
    window.scrollTo(0, 0);
  }

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
                <Link
                  to="/chwrrf"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <Typography
                    sx={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: 400,
                      fontSize: 16,
                      pl: 2,
                    }}
                    onClick={toHome}
                  >
                    Home
                  </Typography>
                </Link>
                {menuItems.map((item) => (
                  <MenuItem key={item.route} onClick={handleCloseNavMenu}>
                    <Typography>
                      <ScrollLink
                        activeClass="active"
                        to={item.target}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={0}
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
                alignItems:"center",
                justifyContent:"center",
                display: { xs: "flex",sm:"flex", md: "none" },
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
              <Link
                to="/chwrrf"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 15,
                    p: 3,
                    "&:hover": {
                      color: "#f8b864",
                    },
                  }}
                  onClick={toHome}

                >
                  Home
                </Typography>
              </Link>
              {menuItems.map((item) => (
                <MenuItem key={item.route} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: 600,
                      fontSize: 15,
                      "&:hover": {
                        color: "#f8b864",
                      },
                    }}
                  >
                    <ScrollLink
                      activeClass="active"
                      to={item.target}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
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
                    fontWeight: 400,
                    display:{xs:"none",sm:"none",md:"flex"},
                    height: "40px",
                    width: "120px",
                    fontSize: "12px",
                    backgroundColor: "#f8b864",
                    "&:hover": {
                      textDecoration: "underline",
                      backgroundColor: "#f8b864",
                    },
                  }}
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
