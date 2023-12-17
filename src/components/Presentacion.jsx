import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import NachoAvatar from "../assets/avatar.jpg";
import { ContactMe } from "./ContactMe";

export const Presentacion = () => {
  return (
    <Grid container justifyContent="center" marginTop={3}>
      <Avatar
        src={NachoAvatar}
        alt="Nacho"
        sx={{
          width: 170,
          height: 170,
          margin: "auto",
          marginBottom: 3,
        }}
      />
      <Typography variant="h4" component="div">
        Ignacio Guardo Ruiz
      </Typography>
      <Typography variant="h5" component="div" gutterBottom>
        Full-Stack Developer
      </Typography>

      <ContactMe />
    </Grid>
  );
};
