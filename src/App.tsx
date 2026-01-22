/**
 * Arquivo principal da aplicação.
 *
 * Responsável por:
 * - Definir os provedores globais (tema e carrinho)
 * - Configurar as rotas da aplicação
 * - Renderizar layout base (Header e Footer)
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Catalogo from "./pages/Catalogo";
import CarrinhoDeCompras from "./pages/CarrinhoDeCompras";
import Login from "./pages/Login";

/**
 * Componente raiz da aplicação
 */
function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/carrinho" element={<CarrinhoDeCompras />} />
            <Route path="/login" element={<Login />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
