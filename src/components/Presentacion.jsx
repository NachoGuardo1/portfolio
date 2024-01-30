import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import NachoAvatar from "../assets/avatar.jpg";

export const Presentacion = () => {
  return (
    <Grid
      container
      sx={{
        marginY: 5,
        display: "flex",
        justifyContent: " center",
        alignItems: "center",
        gap: { xs: 1, md: 3 },
      }}
    >
      <Grid
        item
        xs={4}
        sm={4}
        md={3}
        lg={3}
        justifyContent="center"
        display="flex"
      >
        <Avatar
          src={NachoAvatar}
          alt="Nacho"
          sx={{
            width: { xs: 170, sm: 190, md: 220 },
            height: { xs: 170, sm: 190, md: 220 },
            marginBottom: 3,
          }}
        />
      </Grid>
      <Grid item textAlign="center" xs={10} sm={10} md={7} lg={7}>
        <Typography
          variant="h2"
          component="div"
          gutterBottom
          sx={{
            fontWeight: 650,
            fontFamily: "monospace",
            fontSize: { xs: "30px", md: " 36px" },
            letterSpacing: ".2rem",
          }}
        >
          Ignacio Guardo Ruiz
        </Typography>
        <Typography
          variant="h3"
          component="div"
          sx={{
            fontWeight: 600,
            fontFamily: "monospace",
            fontSize: { xs: "22px", md: " 28px" },
            letterSpacing: ".1rem",
            marginBottom: 2,
          }}
        >
          Full-Stack Developer
        </Typography>
        <Typography
          variant="body1"
          component="div"
          gutterBottom
          sx={{
            fontWeight: "550",
            fontFamily: "monospace",
            color: "text.secondary",
            fontSize: { xs: "14px", md: " 18px" },
          }}
        >
          Siempre buscando maneras de superar desafíos y resolver problemas de
          manera eficiente. Me gusta encontrar soluciones creativas a los
          problemas y me esfuerzo por aprender constantemente para mejorar mis
          habilidades y conocimientos
        </Typography>
      </Grid>
    </Grid>
  );
};
