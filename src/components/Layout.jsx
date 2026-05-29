import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // ✅ ДОБАВЛЕНО: управление reveal-анимацией
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="menu-button" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <Menu isOpen={isOpen} toggleMenu={toggleMenu} />

      <main>
        <Outlet />
      </main>
    </>
  );
}