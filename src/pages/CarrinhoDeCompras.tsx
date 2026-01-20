import React from "react";
import { useCart } from "../context/CartContext";
import { Minus, Plus, X } from "lucide-react";

interface Product {
  id: number;
  title: string;
  desc?: string;
  price: number;
  img: string;
  category?: string;
  quantity?: number;
}

const CarrinhoDeCompras: React.FC = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 1),
    0
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* HEADER */}
      <header className="bg-sky-custom text-white text-2xl py-5 text-center">
        Carrinho de compras — Yabás Pratas
      </header>

      <main className="bg-white px-8 pb-12 max-w-7xl mx-auto">
        <h1 className="text-4xl py-12 text-center">Seu Carrinho</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* LISTA DE PRODUTOS */}
          <section className="flex-1 overflow-x-auto">
            <table className="w-full border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b-4 border-gray-200">
                  <th className="text-left pb-3 uppercase text-gray-600">
                    Produto
                  </th>
                  <th className="text-left pb-3 uppercase text-gray-600">
                    Preço
                  </th>
                  <th className="text-left pb-3 uppercase text-gray-600">
                    Quantidade
                  </th>
                  <th className="text-left pb-3 uppercase text-gray-600">
                    Total
                  </th>
                  <th />
                </tr>
              </thead>

              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b-4 border-gray-200">
                    {/* PRODUTO */}
                    <td className="py-8">
                      <div className="flex items-center gap-5">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-24 h-28 rounded-md object-cover"
                        />
                        <div>
                          <div className="text-xl mb-1">{item.title}</div>
                          {item.category && (
                            <div className="text-gray-600">
                              {item.category}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* PREÇO */}
                    <td>R$ {item.price.toFixed(2)}</td>

                    {/* QUANTIDADE */}
                    <td>
                      <div className="flex items-center justify-between bg-gray-200 rounded-full w-24 h-9 px-3">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(1, (item.quantity ?? 1) - 1)
                            )
                          }
                          className="hover:text-red-500"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="font-medium">
                          {item.quantity ?? 1}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              (item.quantity ?? 1) + 1
                            )
                          }
                          className="hover:text-green-600"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </td>

                    {/* TOTAL */}
                    <td>
                      R${" "}
                      {(item.price * (item.quantity ?? 1)).toFixed(2)}
                    </td>

                    {/* REMOVER */}
                    <td>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-300 transition"
                      >
                        <X size={14} />
                      </button>
                    </td>
                  </tr>
                ))}

                {cart.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="py-20 text-center text-gray-500"
                    >
                      Seu carrinho está vazio 🛒
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>

          {/* RESUMO */}
          <aside className="w-full lg:w-[300px]">
            <div className="border border-gray-300 bg-gray-200 text-gray-800 rounded-xl overflow-hidden">
              <header className="py-4 px-5 text-lg border-b border-gray-300">
                Resumo da compra
              </header>

              <div className="p-5 space-y-3">
                <div className="flex justify-between">
                  <span>Sub-total</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Frete</span>
                  <span className="text-green-600">Gratuito</span>
                </div>

                <button className="flex items-center gap-1 text-sky-custom hover:underline">
                  Adicionar cupom <Plus size={14} />
                </button>
              </div>

              <footer className="py-4 px-5 bg-gray-300 flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </footer>
            </div>

            <button className="mt-6 w-full bg-sky-custom py-4 text-white uppercase tracking-wider rounded-xl hover:bg-green-500 transition">
              Finalizar Compra
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CarrinhoDeCompras;
