import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { ButtonMode } from "./ButtonMode";
import { useNavigate } from "react-router-dom";

export const NavBarApp = () => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar
        position="static"
        color="inherit"
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              My Portfolio
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "end",
              }}
            >
              <Button
                sx={{ my: 2, color: "inherit", display: "block" }}
                onClick={() => navigate("/")}
              >
                About Me
              </Button>
              <Button
                sx={{ my: 2, color: "inherit", display: "block" }}
                onClick={() => navigate("/projects")}
              >
                Projects
              </Button>
              <Button
                sx={{ my: 2, color: "inherit", display: "block" }}
                onClick={() => navigate("/skills")}
              >
                Skills{" "}
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
