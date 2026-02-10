import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
       
{/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Ana Moda Fashion" className="h-10" />
        </Link>

        {/* MENU */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#9E1B1B]"
                : "text-gray-700 hover:text-[#9E1B1B]"
            }
          >
            Início
          </NavLink>

          <NavLink
            to="/catalogo"
            className={({ isActive }) =>
              isActive
                ? "text-[#9E1B1B]"
                : "text-gray-700 hover:text-[#9E1B1B]"
            }
          >
            Catálogo
          </NavLink>

          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              isActive
                ? "text-[#9E1B1B]"
                : "text-gray-700 hover:text-[#9E1B1B]"
            }
          >
            Sobre
          </NavLink>
        </nav>

        {/* CARRINHO */}
        <Link
          to="/carrinho"
          className="text-xl text-gray-700 hover:text-[#9E1B1B]"
        >
          🛒
        </Link>
      </div>
    </header>
  );
}
