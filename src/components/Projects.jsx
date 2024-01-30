import {
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import Img2do from "../assets/2do.jpg";
import ImgEcco from "../assets/ecco.jpg";
import ImgEcco2 from "../assets/eccoV2.jpg";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  const [open, setOpen] = useState(false);
  const [openB, setOpenB] = useState(false);
  const [openC, setOpenC] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          padding: 2,
          marginBottom: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 550,
            fontFamily: "monospace",
            fontSize: { xs: "18px", md: " 22px" },
            letterSpacing: ".1rem",
          }}
        >
          Projects
        </Typography>
      </Paper>

      <TableContainer sx={{ marginBottom: 10 }}>
        <Table>
          <TableBody>
            <TableRow hover>
              <TableCell>
                <Avatar
                  variant="rounded"
                  src={Img2do}
                  sx={{
                    width: { xs: 120, md: 140 },
                    height: { xs: 120, md: 140 },
                  }}
                />
              </TableCell>
              <TableCell>
                <Typography
                  variant="h6"
                  component="div"
                  gutterBottom
                  sx={{
                    fontFamily: "monospace",
                    fontSize: { xs: "18px", md: " 22px" },
                    fontWeight: 550,
                  }}
                >
                  List to-do
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  gutterBottom
                  sx={{
                    fontFamily: "monospace",
                    color: "text.secondary",
                    fontSize: { xs: "14px", md: " 18px" },
                  }}
                >
                  Prototipo de lista TO-DO que permite a los usuarios crear,
                  editar, marcar como completas y borrrar tareas entre otras
                  funciones
                </Typography>
                <IconButton onClick={() => setOpen(!open)}>
                  <GitHubIcon />
                </IconButton>
                <IconButton href="https://2doapp.vercel.app/" target="blank">
                  <PublicIcon />
                </IconButton>
                {open && (
                  <Box marginTop={2}>
                    <Button
                      size="small"
                      href="https://github.com/NachoGuardo1/To-Do"
                      target="blank"
                    >
                      front
                    </Button>
                    <Button
                      size="small"
                      href="https://github.com/NachoGuardo1/Back-Datos"
                      target="blank"
                    >
                      back
                    </Button>
                  </Box>
                )}
              </TableCell>
            </TableRow>

            <TableRow hover>
              <TableCell>
                <Avatar
                  variant="rounded"
                  src={ImgEcco}
                  sx={{
                    width: { xs: 120, md: 140 },
                    height: { xs: 120, md: 140 },
                  }}
                />
              </TableCell>
              <TableCell>
                <Typography
                  variant="h6"
                  component="div"
                  gutterBottom
                  sx={{
                    fontFamily: "monospace",
                    fontSize: { xs: "18px", md: " 22px" },
                    fontWeight: 550,
                  }}
                >
                  E-commerce v1
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  gutterBottom
                  sx={{
                    fontFamily: "monospace",
                    color: "text.secondary",
                    fontSize: { xs: "14px", md: " 18px" },
                  }}
                >
                  Prototipo de E-commerce que permite a los usuarios explorar
                  productos, agregarlos al carrito, agregar productos favoritos,
                  realizar compras simuladas entre otras funciones.
                </Typography>
                <IconButton onClick={() => setOpenB(!openB)}>
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href="https://rolling-tech-v5l8.vercel.app/"
                  target="blank"
                >
                  <PublicIcon />
                </IconButton>
                {openB && (
                  <Box marginTop={2}>
                    <Button
                      size="small"
                      href="https://github.com/NachoGuardo1/RollingTech"
                      target="blank"
                    >
                      front
                    </Button>
                    <Button
                      size="small"
                      href="https://github.com/NachoGuardo1/RollingTechBack"
                      target="blank"
                    >
                      back
                    </Button>
                  </Box>
                )}
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <Avatar
                  variant="rounded"
                  src={ImgEcco2}
                  sx={{
                    width: { xs: 120, md: 140 },
                    height: { xs: 120, md: 140 },
                  }}
                />
              </TableCell>
              <TableCell>
                <Typography
                  variant="h6"
                  component="div"
                  gutterBottom
                  sx={{
                    fontFamily: "monospace",
                    fontSize: { xs: "18px", md: " 22px" },
                    fontWeight: 550,
                  }}
                >
                  E-commerce v2
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  gutterBottom
                  sx={{
                    fontFamily: "monospace",
                    color: "text.secondary",
                    fontSize: { xs: "14px", md: " 18px" },
                  }}
                >
                  Prototipo de E-commerce con mejoras visuales con Material Ui,
                  buscador funcional y mejoras en codigo
                </Typography>
                <IconButton onClick={() => setOpenC(!openC)}>
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href="https://ustore-reducer.vercel.app/"
                  target="blank"
                >
                  <PublicIcon />
                </IconButton>
                {openC && (
                  <Box marginTop={2}>
                    <Button
                      size="small"
                      href="https://github.com/NachoGuardo1/LoginHooks"
                      target="blank"
                    >
                      front
                    </Button>
                    <Button
                      size="small"
                      href="https://github.com/NachoGuardo1/Back-Datos"
                      target="blank"
                    >
                      back
                    </Button>
                  </Box>
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
