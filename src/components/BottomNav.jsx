import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import BoltIcon from "@mui/icons-material/Bolt";
import WorkIcon from "@mui/icons-material/Work";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
export const BottomNav = () => {
  const [value, setValue] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY < 650) {
      setValue(0);
    } else if (scrollY < 1100) {
      setValue(1);
    } else {
      setValue(2);
    }
  }, [scrollY]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const scrollSection1 = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollSection2 = () => {
    window.scrollTo({ top: 750, behavior: "smooth" });
  };
  const scrollSection3 = () => {
    window.scrollTo({ top: 2000, behavior: "smooth" });
  };
  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        justifyContent: "center",
      }}
      value={value}
      onChange={handleChange}
      showLabels
    >
      <BottomNavigationAction
        icon={<PersonIcon />}
        label="About Me"
        onClick={scrollSection1}
        size="small"
      />
      <BottomNavigationAction
        icon={<WorkIcon />}
        label="Projects"
        size="small"
        onClick={scrollSection2}
      />
      <BottomNavigationAction
        icon={<BoltIcon />}
        label="Skills"
        size="small"
        onClick={scrollSection3}
      />
    </BottomNavigation>
  );
};
