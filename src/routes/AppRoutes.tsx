import { Routes, Route } from "react-router-dom";

import UserLayout from "../user/layout/UserLayout";
import AdminLayout from "../admin/AdminLayout";

// user pages
import Home from "../user/pages/Home";
import Catalog from "../user/pages/Catalog";
import Cart from "../user/pages/Cart";
import Login from "../user/pages/Login";
import About from "../user/pages/About";

// admin pages
import Dashboard from "../admin/pages/Dashboard";
import Products from "../admin/pages/Products";
import Orders from "../admin/pages/Orders";

export default function AppRoutes() {
  return (
    <Routes>

      {/* USER */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="catalogo" element={<Catalog />} />
        <Route path="carrinho" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="sobre" element={<About />} />
      </Route>

      {/* ADMIN */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="produtos" element={<Products />} />
        <Route path="pedidos" element={<Orders />} />
      </Route>

    </Routes>
  );
}
