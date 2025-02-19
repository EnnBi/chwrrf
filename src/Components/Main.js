import { Box, Container, Grid, Typography, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../main.css";
import { Main_carousel, promo_Options } from "../data/Constants";
import { getAllNotifications } from "../api";
import { Link as ScrollLink } from "react-scroll";

const Main = () => {
  const [notifications, setNotification] = useState([]);
  const fetchNotify = () => {
    getAllNotifications()
      .then((responseData) => {
        setNotification(responseData);
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      });
  };

  useEffect(() => {
    fetchNotify();
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        top: "-30px",
      }}
    >
      <section id="main">
        <Grid container spacing={0}>
          <Grid item xs={12} md={8}>
            <Box sx={{ border: "none", pt: 2, borderRadius: 3, mr: { md: 0 } }}>
              <div id="carouselExampleCaptions" className="carousel">
                <div className="carousel-inner">
                  {Main_carousel.map((carousel, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={carousel.id}
                    >
                      <img
                        src={carousel.img}
                        className="d-block w-100"
                        alt={carousel.title}
                      />
                      <div className="carousel-caption  d-md-block">
                        <h5 className="animate__animated animate__fadeInLeft">
                          {carousel.tagline}
                        </h5>
                        <h3 className="animate__animated animate__fadeInRight">
                          {carousel.title}
                        </h3>
                        <p className="animate__animated animate__fadeInBottom">
                          {carousel.desc}
                        </p>
                        <ScrollLink
                          to="footer"
                          spy={true}
                          smooth={true}
                          duration={500}
                          className="button animate__animated animate__fadeInLeft"
                        >
                          Donate
                        </ScrollLink>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 2,
                mt: 0,
                backgroundColor: "#f8b864",
                borderRadius: 1,
                height: "550px",
                m: { xs: 4 },
                ml: { md: 0 },
                Width: "100%",
              }}
            >
              <Typography
                sx={{
                  p: 2,
                  fontSize: { xs: "20px", md: "22px" },
                  display: { xs: "block", md: "flex" },
                  fontWeight: 500,
                  color: "white",
                  textDecoration: "underline",
                }}
              >
                News & Notifications
              </Typography>
              <div className="scrolling-container">
                <div className="scrolling-content">
                  {notifications.map((data) => (
                    <div key={data.id}>
                      <Typography
                        variant="h5"
                        sx={{
                          pt: 2,
                          fontSize: { xs: "18px" },
                          display: { xs: "block", md: "flex" },
                          fontWeight: 500,
                          color: "white",
                          "&::after": {
                            textDecoration: "underline",
                            cursor: "pointer",
                          },
                        }}
                      >
                        {data.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          pl: 1,
                          display: { xs: "block", md: "flex" },
                          fontWeight: 500,
                          color: "white",
                          padding: "10px",
                          "&::after": {
                            textDecoration: "underline",
                            cursor: "pointer",
                          },
                        }}
                      >
                        <a
                          href={data.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span
                            style={{
                              whiteSpace: "pre-line",
                              textDecoration: "none",
                            }}
                          >
                            {data.description}
                          </span>
                        </a>
                      </Typography>
                      <Typography
                        sx={{
                          display: { xs: "block", md: "flex" },
                          fontWeight: 300,
                          fontSize: 13,
                          color: "white",
                          "&::after": {
                            textDecoration: "underline",
                            cursor: "pointer",
                          },
                        }}
                      >
                        {data.date.substring(0, 10)}
                      </Typography>
                      <Divider
                        sx={{ backgroundColor: "white", maxWidth: "100%" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container
            sx={{
              display: { xs: "block", sm: "block", md: "flex" },
              backgroundColor: "white",
              position: "relative",
              top: "-140px",
              borderRadius: 2,
            }}
          >
            {promo_Options.map((promo) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{
                  "& > :not(:last-child)": {
                    borderRight: "1px dashed #ff1",
                  },
                }}
              >
                <div className="promo-content" key={promo.id}>
                  <img src={promo.img} alt="prmo icon" />
                  <h3>{promo.title}</h3>
                  <p>{promo.desc}</p>
                </div>
              </Grid>
            ))}
          </Container>
        </Grid>
      </section>
    </Box>
  );
};

export default Main;
