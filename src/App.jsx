import React from "react";
import "./styles/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SectionProjects } from "./sections/SectionProjects";
import { SectionSkills } from "./sections/SectionSkills";
import { SectionHome } from "./sections/SectionHome";
import { SectionContactMe } from "./sections/SectionContactMe";
import { BottomNav } from "./components/BottomNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SectionHome />}>
            <Route index element={<SectionContactMe />} />
            <Route path="/projects" element={<SectionProjects />} />
            <Route path="/skills" element={<SectionSkills />} />
          </Route>
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </>
  );
}

export default App;
