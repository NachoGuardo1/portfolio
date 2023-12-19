import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import NachoAvatar from "../assets/avatar.jpg";
import { ContactMe } from "./ContactMe";

export const Presentacion = () => {
  return (
    <Grid
      container
      marginTop={3}
      justifyContent={{
        xs: "center",
        sm: "center",
        md: "space-around",
        lg: "space-around",
      }}
      sx={{ marginBottom: "60px", marginTop: "30px" }}
    >
      <Grid
        item
        xs={4}
        sm={4}
        md={2}
        lg={2}
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
      <Grid item textAlign="center" xs={10} sm={10} md={8} lg={8}>
        <Typography variant="h4" component="div">
          Ignacio Guardo Ruiz
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          Full-Stack Developer
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom>
          Siempre buscando maneras de superar desafíos y resolver problemas de
          manera eficiente. Me gusta encontrar soluciones creativas a los
          problemas y me esfuerzo por aprender constantemente para mejorar mis
          habilidades y conocimientos
        </Typography>
      </Grid>

      <ContactMe />
    </Grid>
  );
};
