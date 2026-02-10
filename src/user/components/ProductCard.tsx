import type { Product } from "../../data/products";

type Props = {
  product: Product;
  onAddToCart: () => void;
};

export default function ProductCard({ product, onAddToCart }: Props) {
  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition flex flex-col">
      
      {/* IMAGEM */}
      <div className="bg-gray-100 rounded-2xl overflow-hidden">
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-57 object-cover transition-transform duration-300 hover:scale-105"
  />
</div>


      {/* NOME */}
      <h3 className="text-lg font-semibold mb-1">
        {product.name}
      </h3>

      {/* CATEGORIA */}
      <p className="text-sm text-gray-500 mb-2">
        {product.category}
      </p>

      {/* PREÇO */}
      <p className="text-xl font-bold mb-4">
        R$ {product.price.toFixed(2)}
      </p>

      {/* BOTÃO */}
      <button
        onClick={onAddToCart}
        className="mt-auto bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
