import { Link } from "react-router-dom";

export default function Menu({ isOpen = false, toggleMenu = () => {} }) {
  return (
    <>
      {/* BACKDROP */}
      {isOpen && <div className="menu-backdrop" onClick={toggleMenu}></div>}

      {/* SIDE MENU */}
      <div className={`side-menu ${isOpen ? "active" : ""}`}>

        {/* CLOSE BUTTON */}
        <div className="menu-close" onClick={toggleMenu}>
          ✕
        </div>

        <Link to="/" onClick={toggleMenu}>Главная</Link>
        <Link to="/about" onClick={toggleMenu}>Обо мне</Link>
        <Link to="/courses" onClick={toggleMenu}>Программы</Link>
        <Link to="/reviews" onClick={toggleMenu}>Отзывы</Link>
        <Link to="/faq" onClick={toggleMenu}>FAQ</Link>
        <Link to="/contacts" onClick={toggleMenu}>Контакты</Link>

      </div>
    </>
  );
}