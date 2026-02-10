import { useState } from "react";
import { useProducts } from "../../context/ProductContext";
import { useCart } from "../../context/CartContext";
import ProductCard from "../components/ProductCard";
import type { Product } from "../../data/products";

export default function Catalogo() {
  const { products } = useProducts();
  const { addToCart } = useCart();

  const [categoriaAtiva, setCategoriaAtiva] = useState<string>("Todos");

  // somente produtos ativos
  const produtosAtivos: Product[] = products.filter(p => p.active);

  // categorias dinâmicas
  const categorias: string[] = [
    "Todos",
    ...Array.from(new Set(produtosAtivos.map(p => p.category))),
  ];

  // filtro por categoria
  const produtosFiltrados =
    categoriaAtiva === "Todos"
      ? produtosAtivos
      : produtosAtivos.filter(p => p.category === categoriaAtiva);

  return (
    <main className="bg-white min-h-screen px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-serif mb-8">Catálogo</h1>

      {/* CATEGORIAS */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categorias.map(cat => (
          <button
            key={cat}
            onClick={() => setCategoriaAtiva(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              categoriaAtiva === cat
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUTOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {produtosFiltrados.map(produto => (
          <ProductCard
            key={produto.id}
            product={produto}
            onAddToCart={() =>
              addToCart({
                id: produto.id,
                name: produto.name,
                price: produto.price,
              })
            }
          />
        ))}
      </div>
    </main>
  );
}
