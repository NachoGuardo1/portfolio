import React from "react";
import { Presentacion } from "../components/Presentacion";
import { NavBarApp } from "../components/NavBarApp";
import { Outlet } from "react-router-dom";

export const SectionHome = () => {
  return (
    <>
      <NavBarApp />
      <Presentacion />
      <Outlet />
    </>
  );
};
