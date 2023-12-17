import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import ImgReact from "../assets/reactjs.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import Img2do from "../assets/2do.jpg";
import ImgEcco from "../assets/ecco.jpg";

export const Projects = () => {
  return (
    <>
      <Typography variant="h5" textAlign="center" marginTop={5}>
        Projects
      </Typography>
      <Grid
        container
        spacing={4}
        display="flex"
        justifyContent="center"
        alignContent="center"
        marginTop={3}
        sx={{ marginBottom: "80px" }}
      >
        <Grid item xs={9} sm={3}>
          <Card
            elevation={4}
            sx={{
              height: "400px",
            }}
          >
            <CardHeader
              sx={{ textAlign: "center" }}
              title="E-Commerce"
            ></CardHeader>
            <CardMedia
              component="img"
              height="150"
              image={ImgEcco}
              alt="Paella dish"
            />
            <CardContent>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                Prototipo de E-commerce que permite a los usuarios explorar
                productos, agregarlos al carrito, agregar productos favoritos,
                realizar compras simuladas entre otras funciones.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", gap: 3 }}>
              <IconButton
                aria-label="deploy"
                href="https://rolling-tech-v5l8.vercel.app/"
                target="blank"
              >
                <PublicIcon />
              </IconButton>
              <IconButton
                aria-label="repositorio"
                href="https://github.com/NachoGuardo1/RollingTech"
                target="blank"
              >
                <GitHubIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={9} sm={3}>
          <Card
            elevation={4}
            sx={{
              height: "400px",
            }}
          >
            <CardHeader
              sx={{ textAlign: "center" }}
              title="To-Do App"
            ></CardHeader>
            <CardMedia
              component="img"
              height="150"
              image={Img2do}
              alt="Paella dish"
            />
            <CardContent>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                Prototipo de lista TO-DO que permite a los usuarios crear,
                editar, marcar como completas y borrrar tareas entre otras
                funciones
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", gap: 3 }}>
              <IconButton
                aria-label="deploy"
                href="https://2doapp.vercel.app/"
                target="blank"
              >
                <PublicIcon />
              </IconButton>
              <IconButton
                aria-label="repositorio"
                href="https://github.com/NachoGuardo1/To-Do"
                target="blank"
              >
                <GitHubIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
