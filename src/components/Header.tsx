import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-sky-custom text-white p-4">
    <nav className="flex justify-between">
      <Link to="/" className="text-xl font-bold">
        E-commerce
      </Link>
      <div>
        <Link to="/sobre" className="mr-4">
          Sobre
        </Link>
        <Link to="/catalogo" className="mr-4">
          Catálogo
        </Link>
        <Link to="/carrinho">Carrinho</Link>
      </div>
    </nav>
  </header>
);

export default Header;
