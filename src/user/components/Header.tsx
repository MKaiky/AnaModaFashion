import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-[#9E1B1B]"
      : "text-gray-700 hover:text-[#9E1B1B]";

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Ana Moda Fashion" className="h-10" />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <NavLink to="/" className={linkClass}>
            Início
          </NavLink>

          <NavLink to="/catalogo" className={linkClass}>
            Catálogo
          </NavLink>

          <NavLink to="/sobre" className={linkClass}>
            Sobre
          </NavLink>
        </nav>

        {/* AÇÕES DIREITA */}
        <div className="flex items-center gap-4">

          {/* CARRINHO */}
          <Link
            to="/carrinho"
            className="text-xl text-gray-700 hover:text-[#9E1B1B]"
          >
            🛒
          </Link>

          {/* BOTÃO HAMBURGUER (MOBILE) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">
            <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>
              Início
            </NavLink>

            <NavLink onClick={() => setOpen(false)} to="/catalogo" className={linkClass}>
              Catálogo
            </NavLink>

            <NavLink onClick={() => setOpen(false)} to="/sobre" className={linkClass}>
              Sobre
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
