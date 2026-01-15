<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";

=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
>>>>>>> d2d0ec29a1b52ac8ec890a1941868a1b0091f052
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Catalogo from "./pages/Catalogo";
import CarrinhoDeCompras from "./pages/CarrinhoDeCompras";
import Login from "./pages/Login";

function App() {
  return (
<<<<<<< HEAD
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/carrinho" element={<CarrinhoDeCompras />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
=======
    <CartProvider>
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
>>>>>>> d2d0ec29a1b52ac8ec890a1941868a1b0091f052
  );
}

export default App;
