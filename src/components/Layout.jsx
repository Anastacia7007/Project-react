import { useState } from "react";
import Menu from "./Menu";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="menu-button" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <Menu isOpen={isOpen} toggleMenu={toggleMenu} />

      <main>
        {children}
      </main>
    </>
  );
}