import {
  Avatar,
  Box,
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SchoolIcon from "@mui/icons-material/School";

export const ContactMe = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper", marginTop: "60px" }}
    >
      <Grid
        container
        justifyContent={{
          xs: "center",
          sm: "center",
          md: "space-around",
          lg: "space-around",
        }}
      >
        <Grid item xs={6} sm={5} md={5} lg={5} textAlign="center">
          <Typography variant="overline">About Me</Typography>
          <ListItem>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Argentina" secondary="Tucuman" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText primary="Espanish" secondary="Native" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText primary="English" secondary="EF SET C2" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText
              primary="Full Stack Developer"
              secondary="Rolling Code School"
            />
          </ListItem>
        </Grid>
        <Grid item xs={6} sm={5} md={5} lg={5} textAlign="center">
          <Typography variant="overline">Contact Me</Typography>
          <ListItem>
            <ListItemButton
              href="https://www.linkedin.com/in/ignacioguardoruiz/"
              target="blank"
            >
              <ListItemAvatar>
                <Avatar>
                  <LinkedInIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="LinkedIn" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              href="https://github.com/NachoGuardo1"
              target="blank"
            >
              <ListItemAvatar>
                <Avatar>
                  <GitHubIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="GitHub" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={handleClick}>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Gmail" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem>
                <Typography variant="caption" color="text.secondary">
                  nachoguardoruiz@gmail.com
                </Typography>
              </ListItem>
            </List>
          </Collapse>
        </Grid>
      </Grid>
    </List>
  );
};
