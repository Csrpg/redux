import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contactanos</Link>
            </li>
            <li>
              <Link to="/about">Sobre mi</Link>
            </li>
            <li>
              <Link to="/projects">Proyectos</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
}
