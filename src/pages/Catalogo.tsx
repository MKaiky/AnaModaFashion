import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

const Catalogo: React.FC = () => {
  const [products] = useState([
    {
      id: 1,
      title: "Fone Bluetooth",
      desc: "Fone sem fio com cancelamento de ruído.",
      price: 99.9,
      img: "https://via.placeholder.com/300x200",
      category: "eletronicos",
    },
    {
      id: 2,
      title: "Relógio Feminino",
      desc: "Relógio elegante com pulseira metálica.",
      price: 120.0,
      img: "https://via.placeholder.com/300x200",
      category: "acessorios",
    },
    {
      id: 3,
      title: "Kit Maquiagem",
      desc: "Kit básico para o dia a dia.",
      price: 89.9,
      img: "https://via.placeholder.com/300x200",
      category: "beleza",
    },
    {
      id: 4,
      title: "Caixa de Som",
      desc: "Caixa bluetooth portátil.",
      price: 150.0,
      img: "https://via.placeholder.com/300x200",
      category: "eletronicos",
    },
  ]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [modalProduct, setModalProduct] = useState<any>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    let filtered = products;
    if (search)
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    if (category) filtered = filtered.filter((p) => p.category === category);
    setFilteredProducts(filtered);
  }, [search, category, products]);

  const openModal = (product: any) => setModalProduct(product);
  const closeModal = () => setModalProduct(null);

  return (
    <div className="font-sans bg-blue-50 m-0 p-5 text-gray-800">
      <header className="flex flex-wrap gap-3 items-center mb-5">
        <h1 className="w-full text-2xl m-0 mb-3">Catálogo de Produtos</h1>
        <input
          type="text"
          placeholder="Buscar produto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded-md border border-gray-300 text-sm"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded-md border border-gray-300 text-sm"
        >
          <option value="">Todas categorias</option>
          <option value="eletronicos">Eletrônicos</option>
          <option value="beleza">Beleza</option>
          <option value="acessorios">Acessórios</option>
        </select>
        <button
          onClick={() => {
            setSearch("");
            setCategory("");
          }}
          className="p-2 bg-gray-300 rounded-md cursor-pointer"
        >
          Redefinir
        </button>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-lg p-3 shadow-md hover:-translate-y-1 transition-transform"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <div className="font-bold mt-2 mb-1">{p.title}</div>
            <div className="font-bold text-blue-600">
              R$ {p.price.toFixed(2)}
            </div>
            <div className="text-sm text-gray-600">{p.desc}</div>
            <button
              onClick={() => openModal(p)}
              className="mt-3 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-800"
            >
              Ver Detalhes
            </button>
          </div>
        ))}
      </div>
      {modalProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-5"
          onClick={closeModal}
        >
          <div
            className="bg-white w-full max-w-md p-4 rounded-lg shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 bg-gray-200 p-2 rounded-md"
            >
              Fechar
            </button>
            <img
              src={modalProduct.img}
              alt=""
              className="w-full rounded-lg mb-3"
            />
            <h2>{modalProduct.title}</h2>
            <p>{modalProduct.desc}</p>
            <p className="font-bold text-blue-600">
              R$ {modalProduct.price.toFixed(2)}
            </p>
            <button
              onClick={() => {
                addToCart(modalProduct);
                closeModal();
              }}
              className="w-full mt-3 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-800"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalogo;
