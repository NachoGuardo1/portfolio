import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ImgReact from "../assets/reactjs.png";
import ImgJs from "../assets/js.png";
import ImgMongo from "../assets/mongo.png";
import ImgExpress from "../assets/expressjs.png";
import ImgMui from "../assets/logomaterial.png";
import ImgHtml from "../assets/html.png";
import ImgBootstrap from "../assets/bootstrap.png";
import ImgNode from "../assets/node.png";
import ImgCss from "../assets/css.png";

export const Skills = () => {
  const skills = [
    { nombre: "JavaScript", alt: "js", img: ImgJs, id: 1 },
    { nombre: "React Js", alt: "React Js", img: ImgReact, id: 2 },
    { nombre: "HTML", alt: "Html", img: ImgHtml, id: 3 },
    { nombre: "CSS", alt: "Css", img: ImgCss, id: 4 },
    { nombre: "Material Ui", alt: "Mui", img: ImgMui, id: 5 },
    { nombre: "Bootstrap", alt: "bootstrap", img: ImgBootstrap, id: 6 },
    { nombre: "Node Js", alt: "node js", img: ImgNode, id: 7 },
    { nombre: "Mongo DB", alt: "mongodb", img: ImgMongo, id: 8 },
    { nombre: "Express Js", alt: "express js", img: ImgExpress, id: 9 },
  ];
  return (
    <>
      <Typography variant="h5" textAlign="center" marginTop={5}>
        Skills
      </Typography>
      <Grid
        container
        spacing={3}
        display="flex"
        justifyContent="center"
        alignContent="center"
        marginTop={3}
        marginBottom={3}
      >
        {skills.map((skill) => (
          <Grid item xs={5} sm={5} md={3} marginX={1}>
            <Card elevation={4} key={skill.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="75"
                  image={skill.img}
                  alt={skill.alt}
                  sx={{ objectFit: "contain" }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    component="div"
                    color="text.secondary"
                  >
                    {skill.nombre}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
