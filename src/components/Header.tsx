import { Link } from "react-router-dom";
import { ShoppingCart, User, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/images/logo-branca.png";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const themeClasses =
    theme === "light"
      ? "bg-sky-custom text-gray-800"
      : "bg-sky-custom-dark text-white";

  return (
    <header className={`${themeClasses} transition-colors duration-300`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Yabás Pratas" className="h-20 w-auto" />
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-8 text-sm uppercase tracking-wide">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/catalogo">Catálogo</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
        </ul>

        {/* Ações */}
        <div className="flex items-center gap-5">
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="p-2 rounded-full hover:bg-black/10 transition"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <Link to="/login">
            <User size={22} />
          </Link>

          <Link to="/carrinho">
            <ShoppingCart size={22} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
