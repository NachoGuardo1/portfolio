import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import BoltIcon from "@mui/icons-material/Bolt";
import WorkIcon from "@mui/icons-material/Work";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";

import { useNavigate } from "react-router-dom";

export const BottomNav = () => {
  const [value, setValue] = useState("/");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    navigate(`${value}`);
  }, [value]);

  return (
    <Paper
      sx={{
        width: "100%",
        display: { xs: "flex", md: "none" },
        position: "fixed",
        bottom: 0,
      }}
      elevation={3}
    >
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
        sx={{ display: "flex", justifyContent: "space-around", width: "100%" }}
      >
        <BottomNavigationAction
          icon={<PersonIcon />}
          label="About Me"
          size="small"
          value="/"
        />
        <BottomNavigationAction
          icon={<WorkIcon />}
          label="Projects"
          size="small"
          value="projects"
        />
        <BottomNavigationAction
          icon={<BoltIcon />}
          label="Skills"
          size="small"
          value="skills"
        />
      </BottomNavigation>
    </Paper>
  );
};
