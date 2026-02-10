import { Routes, Route } from "react-router-dom";
import Catalogo from "../user/pages/Catalog";

const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<Catalogo />} />
  </Routes>
);

export default PublicRoutes;
