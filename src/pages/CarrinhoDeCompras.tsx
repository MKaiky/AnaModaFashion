import React from "react";
import { useCart } from "../context/CartContext";
import { FiMinus, FiPlus, FiX } from "react-icons/fi";

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
    (sum: number, item: Product) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="bg-gray-100 font-lato min-h-screen">
      <header className="bg-sky-custom text-white text-2xl py-5 text-center">
        Carrinho de compras do yabas pratas
      </header>
      <main className="bg-white p-0 px-8 pb-8">
        <div className="text-4xl py-12 text-center">Seu Carrinho</div>
        <div className="flex">
          <section className="flex-1">
            <table className="w-full border-collapse">
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
                  <th className="text-left pb-3 uppercase text-gray-600">-</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item: Product) => (
                  <tr key={item.id} className="border-b-4 border-gray-200">
                    <td className="py-8">
                      <div className="flex items-center">
                        <img
                          src={item.img}
                          alt=""
                          className="rounded-md w-24 h-28 object-cover"
                        />
                        <div className="ml-5">
                          <div className="text-xl mb-3">{item.title}</div>
                          <div className="text-gray-600">{item.category}</div>
                        </div>
                      </div>
                    </td>
                    <td>R$ {item.price.toFixed(2)}</td>
                    <td>
                      <div className="flex items-center justify-around bg-gray-200 rounded-full overflow-hidden w-16 h-8">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, (item.quantity || 1) - 1)
                          }
                          className="flex items-center px-3 h-full hover:bg-gray-300"
                        >
                          <React.Fragment>{FiMinus({})}</React.Fragment>
                        </button>
                        <span className="mx-3">{item.quantity || 1}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, (item.quantity || 1) + 1)
                          }
                          className="flex items-center px-3 h-full hover:bg-gray-300"
                        >
                          <React.Fragment>{FiPlus({})}</React.Fragment>
                        </button>
                      </div>
                    </td>
                    <td>R$ {(item.price * (item.quantity || 1)).toFixed(2)}</td>
                    <td>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300"
                      >
                        <React.Fragment>{FiX({})}</React.Fragment>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <aside className="ml-8 min-w-64">
            <div className="mb-4 border border-gray-300 bg-gray-200 text-gray-800">
              <header className="py-4 px-5 text-lg border-b border-gray-300">
                Resumo da compra
              </header>
              <div className="p-5 text-base">
                <div className="flex justify-between mb-3 text-gray-700">
                  <span>Sub-total</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-3 text-gray-700">
                  <span>Frete</span>
                  <span>Gratuito</span>
                </div>
                <div>
                  <button className="text-sky-custom bg-transparent border-0 flex items-center text-base">
                    Adicionar cupom{" "}
                    <React.Fragment>{FiPlus({})}</React.Fragment>
                  </button>
                </div>
              </div>
              <footer className="py-4 px-5 bg-gray-300 text-lg flex justify-between">
                <span>Total</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </footer>
            </div>
            <button className="border-0 py-4 text-white bg-sky-custom w-full uppercase tracking-wider text-base hover:bg-green-500">
              Finalizar Compra
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CarrinhoDeCompras;
