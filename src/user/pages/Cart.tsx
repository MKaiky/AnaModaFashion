import { useCart } from "../../context/CartContext";

export default function Carrinho() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (sum: number, item) => sum + item.price * item.quantity,
    0
  );

  function finalizarCompra() {
    if (cart.length === 0) return;

    const numeroWhatsApp = "5583981218132"; // 📲 SEU NÚMERO

    let mensagem = "Olá! Gostei dos seguintes produtos:%0A%0A";

    cart.forEach(item => {
      mensagem += `• ${item.name} (x${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2)}%0A`;
    });

    mensagem += `%0ATotal: R$ ${total.toFixed(2)}`;

    const link = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

    window.open(link, "_blank");
    clearCart();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-serif mb-8">Carrinho</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map(item => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div>
                  <h2 className="font-medium">{item.name}</h2>
                  <p className="text-sm text-gray-500">
                    {item.quantity}x R$ {item.price.toFixed(2)}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Remover
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-between items-center">
            <strong className="text-xl">
              Total: R$ {total.toFixed(2)}
            </strong>

            <button
              onClick={finalizarCompra}
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
            >
              Finalizar no WhatsApp
            </button>
          </div>
        </>
      )}
    </main>
  );
}
