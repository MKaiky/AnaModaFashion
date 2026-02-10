import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../admin/pages/Dashboard";

const isAdmin = () => {
  return localStorage.getItem("admin") === "true";
};

const AdminRoutes = () => {
  if (!isAdmin()) {
    return <Navigate to="/" replace />;
  }

  return (
    <Routes>
      <Route path="/admin" element={<Dashboard />} />
    </Routes>
  );
};

export default AdminRoutes;
