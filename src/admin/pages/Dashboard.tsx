import { useProducts } from "../../context/ProductContext";
import type { Product } from "../../data/products";

const Dashboard = () => {
  const { products, setProducts } = useProducts();

  const toggleActive = (id: number) => {
    setProducts((prev: Product[]) =>
      prev.map(p =>
        p.id === id ? { ...p, active: !p.active } : p
      )
    );
  };

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="space-y-4">
        {products.map((p: Product) => (
          <div
            key={p.id}
            className="flex justify-between items-center border p-4 rounded"
          >
            <div>
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-gray-500">{p.category}</p>
            </div>

            <button
              onClick={() => toggleActive(p.id)}
              className={`px-4 py-2 rounded text-white ${
                p.active ? "bg-red-500" : "bg-green-600"
              }`}
            >
              {p.active ? "Desativar" : "Ativar"}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
