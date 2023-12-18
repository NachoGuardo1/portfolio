import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Collapse,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import Img2do from "../assets/2do.jpg";
import ImgEcco from "../assets/ecco.jpg";

export const Projects = () => {
  const [open, setOpen] = useState(false);
  const [openB, setOpenB] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickB = () => {
    setOpenB(!openB);
  };
  return (
    <>
      <List
        sx={{
          width: "100%",
          overflow: "auto",
          maxHeight: 500,
          "& ul": { padding: 0 },
          marginBottom: "80px",
        }}
        subheader={<li />}
      >
        <ListSubheader sx={{ marginBottom: "20px" }}>
          <Typography variant="h5" textAlign="center" color="text.primary">
            Projects
          </Typography>
        </ListSubheader>
        <ListItem sx={{ gap: 2, marginY: 3 }}>
          <ListItemAvatar>
            <Avatar
              variant="rounded"
              alt="eccomerce"
              sx={{ width: 100, height: 150 }}
              src={ImgEcco}
            />
          </ListItemAvatar>
          <Box>
            <ListItemText
              primary="E-commerce"
              secondary="Prototipo de E-commerce que permite a los usuarios explorar
                productos, agregarlos al carrito, agregar productos favoritos,
                realizar compras simuladas entre otras funciones."
            />
            <Chip label="React" size="small" sx={{ marginRight: 1 }} />
            <Chip label="Mongo Db" size="small" />
            <Box display="flex" justifyContent="end">
              <IconButton
                aria-label="deploy"
                href="https://rolling-tech-v5l8.vercel.app/"
                target="blank"
              >
                <PublicIcon />
              </IconButton>
              <IconButton
                aria-label="repositorio"
                target="blank"
                onClick={handleClick}
              >
                <GitHubIcon />
              </IconButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{}}>
                  <ListItemButton
                    href="https://github.com/NachoGuardo1/RollingTech"
                    target="blank"
                  >
                    <Typography variant="caption">Front</Typography>
                  </ListItemButton>
                  <ListItemButton
                    href="https://github.com/NachoGuardo1/RollingTechBack"
                    target="blank"
                  >
                    <Typography variant="caption">Back</Typography>
                  </ListItemButton>
                </List>
              </Collapse>
            </Box>
          </Box>
        </ListItem>
        <Divider />
        <ListItem sx={{ gap: 2, marginY: 3 }}>
          <ListItemAvatar>
            <Avatar
              variant="rounded"
              alt="2do"
              sx={{ width: 100, height: 150 }}
              src={Img2do}
            />
          </ListItemAvatar>
          <Box>
            <ListItemText
              primary="To-do List"
              secondary="Prototipo de lista TO-DO que permite a los usuarios crear,
                editar, marcar como completas y borrrar tareas entre otras
                funciones"
            />

            <Chip label="React" size="small" sx={{ marginRight: 1 }} />
            <Chip label="Mongo Db" size="small" />

            <Box display="flex" justifyContent="end">
              <IconButton
                aria-label="deploy"
                href="https://2doapp.vercel.app/"
                target="blank"
              >
                <PublicIcon />
              </IconButton>
              <IconButton aria-label="repositorio" onClick={handleClickB}>
                <GitHubIcon />
              </IconButton>
              <Collapse in={openB} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    href="https://github.com/NachoGuardo1/To-Do"
                    target="blank"
                  >
                    <Typography variant="caption">Front</Typography>
                  </ListItemButton>
                  <ListItemButton
                    href="https://github.com/NachoGuardo1/Back-Datos"
                    target="blank"
                  >
                    <Typography variant="caption">Back</Typography>
                  </ListItemButton>
                </List>
              </Collapse>
            </Box>
          </Box>
        </ListItem>
      </List>
    </>
  );
};
