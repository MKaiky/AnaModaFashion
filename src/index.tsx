/**
 * Ponto de entrada da aplicação React.
 *
 * Responsável por:
 * - Inicializar o React no DOM
 * - Renderizar o componente App
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Contextos
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <CartProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartProvider>
  </React.StrictMode>
);
