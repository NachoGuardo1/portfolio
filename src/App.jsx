import {
  Box,
  CssBaseline,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";

import "./styles/app.css";
import { Skills } from "./components/Skills";
import { Presentacion } from "./components/Presentacion";
import { Projects } from "./components/Projects";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { BottomNav } from "./components/BottomNav";

function App() {
  const [modeColor, setMode] = useState("dark");

  const theme = createTheme({
    palette: {
      mode: modeColor,
    },
  });

  const switchMode = () => {
    const newMode = modeColor === "dark" ? "light" : "dark";
    setMode(newMode);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Box justifyContent="end" display="flex">
            <IconButton onClick={switchMode}>
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
          <Presentacion />
          <Skills />
          <Projects />
          <BottomNav />
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
