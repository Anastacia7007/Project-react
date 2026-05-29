import { useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* MENU BUTTON */}
      <div className="menu-button" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* SIDE MENU */}
      <Menu isOpen={isOpen} toggleMenu={toggleMenu} />

      {/* PAGE CONTENT */}
      <main>
        <Outlet />
      </main>
    </>
  );
}