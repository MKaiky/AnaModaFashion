import { Link } from "react-router-dom";
import { ShoppingCart, User, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/images/logo-branca.png";

/**
 * Componente Header
 *
 * Responsável pelo topo da aplicação, contendo:
 * - Logo da marca
 * - Navegação principal
 * - Ações do usuário (login, carrinho)
 * - Alternância entre tema claro e escuro
 *
 * Utiliza Context API para controle global de tema.
 */
const Header = () => {
  /**
   * Recupera o tema atual e a função de alternância
   * a partir do ThemeContext
   */
  const { theme, toggleTheme } = useTheme();

  /**
   * Classes CSS aplicadas dinamicamente conforme o tema ativo
   */
  const themeClasses =
    theme === "light"
      ? "bg-sky-custom text-gray-800"
      : "bg-sky-custom-dark text-white";

  return (
    <header className={`${themeClasses} transition-colors duration-300`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo da aplicação */}
        <Link to="/">
          <img src={logo} alt="Yabás Pratas" className="h-20 w-auto" />
        </Link>

        {/* Menu de navegação principal */}
        <ul className="flex items-center gap-8 text-sm uppercase tracking-wide">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/catalogo">Catálogo</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
        </ul>

        {/* Ações do usuário */}
        <div className="flex items-center gap-5">
          {/* Botão de alternância de tema */}
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="p-2 rounded-full hover:bg-black/10 transition"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Acesso ao login */}
          <Link to="/login">
            <User size={22} />
          </Link>

          {/* Acesso ao carrinho */}
          <Link to="/carrinho">
            <ShoppingCart size={22} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
