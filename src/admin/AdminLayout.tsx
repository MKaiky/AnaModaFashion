import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-black text-white p-6">
        <h2 className="font-playfair text-2xl mb-8">
          Admin
        </h2>

        <nav className="flex flex-col gap-4">
          <a href="/admin" className="hover:text-gray-300">Dashboard</a>
          <a href="/admin/produtos" className="hover:text-gray-300">Produtos</a>
          <a href="/admin/pedidos" className="hover:text-gray-300">Pedidos</a>
        </nav>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
}
