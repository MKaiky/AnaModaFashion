import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // Novo
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Catalogo from "./pages/Catalogo";
import CarrinhoDeCompras from "./pages/CarrinhoDeCompras";

function App() {
  return (
    <CartProvider>
      {" "}
      {/* Envolve tudo para acesso global ao carrinho */}
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/carrinho" element={<CarrinhoDeCompras />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
