import React, { useMemo, useState } from "react";
import { useCart } from "../context/CartContext";

type Product = {
  id: number;
  title: string;
  desc: string;
  price: number;
  img: string;
  category: string;
};

const productsData: Product[] = [
  {
    id: 1,
    title: "Anel Prata 925 Minimal",
    desc: "Anel delicado em prata 925 com acabamento polido.",
    price: 129.9,
    img: "https://via.placeholder.com/400x400",
    category: "aneis",
  },
  {
    id: 2,
    title: "Colar Coração Prata",
    desc: "Colar em prata 925 com pingente de coração.",
    price: 189.9,
    img: "https://via.placeholder.com/400x400",
    category: "colares",
  },
  {
    id: 3,
    title: "Pulseira Elo Fino",
    desc: "Pulseira feminina em prata 925.",
    price: 159.9,
    img: "https://via.placeholder.com/400x400",
    category: "pulseiras",
  },
  {
    id: 4,
    title: "Brinco Argola Prata",
    desc: "Argola clássica em prata 925.",
    price: 99.9,
    img: "https://via.placeholder.com/400x400",
    category: "brincos",
  },
];

const Catalogo: React.FC = () => {
  const { addToCart } = useCart();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory = category
        ? product.category === category
        : true;

      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">
          Catálogo Yabas Pratas
        </h1>
        <p className="text-gray-500 mt-1">
          Joias em prata 925 feitas para brilhar com você ✨
        </p>
      </div>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row gap-3 mb-10">
        <input
          type="text"
          placeholder="Buscar joia..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-1/4 rounded-lg border border-gray-300 px-4 py-2"
        >
          <option value="">Todas as categorias</option>
          <option value="aneis">Anéis</option>
          <option value="colares">Colares</option>
          <option value="pulseiras">Pulseiras</option>
          <option value="brincos">Brincos</option>
        </select>

        <button
          onClick={() => {
            setSearch("");
            setCategory("");
          }}
          className="md:w-1/4 rounded-lg bg-gray-200 hover:bg-gray-300 transition px-4 py-2"
        >
          Limpar filtros
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={product.img}
              alt={product.title}
              className="h-64 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-medium text-gray-800">
                {product.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {product.desc}
              </p>

              <p className="mt-3 text-lg font-semibold text-gray-900">
                R$ {product.price.toFixed(2)}
              </p>

              <button
                onClick={() => setModalProduct(product)}
                className="mt-4 w-full rounded-full border border-gray-800 py-2 hover:bg-gray-800 hover:text-white transition"
              >
                Ver detalhes
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalProduct && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setModalProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalProduct(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <img
              src={modalProduct.img}
              alt={modalProduct.title}
              className="rounded-xl mb-4"
            />

            <h2 className="text-xl font-semibold">
              {modalProduct.title}
            </h2>

            <p className="text-gray-500 mt-2">
              {modalProduct.desc}
            </p>

            <p className="mt-4 text-2xl font-bold">
              R$ {modalProduct.price.toFixed(2)}
            </p>

            <button
              onClick={() => {
                addToCart(modalProduct);
                setModalProduct(null);
              }}
              className="mt-6 w-full bg-gray-900 text-white py-3 rounded-full hover:bg-gray-700 transition"
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Catalogo;
