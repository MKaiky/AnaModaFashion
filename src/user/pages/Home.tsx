import heroImage from "../../assets/images/hero.png";
import { useProducts } from "../../context/ProductContext";
import { useCart } from "../../context/CartContext";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function Home() {
  const { products } = useProducts();
  const { addToCart } = useCart();

  const destaques = products
    .filter(p => p.active)
    .slice(0, 4); // mobile-friendly

  return (
    <main>
      {/* HERO */}
      <section className="bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div>
            <h1 className="font-playfair text-4xl md:text-5xl leading-tight text-[#111] mb-6">
              Elegância que <br /> transforma o seu estilo
            </h1>

            <p className="text-gray-600 mb-8 max-w-md">
              Moda feminina, masculina, infantil e calçados selecionados
              para quem valoriza sofisticação no dia a dia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/catalogo"
                className="bg-[#9E1B1B] text-white px-8 py-3 rounded-full text-center hover:bg-[#7E1414] transition"
              >
                Ver catálogo
              </Link>

              <Link
                to="/sobre"
                className="border border-[#9E1B1B] text-[#9E1B1B] px-8 py-3 rounded-full text-center hover:bg-[#9E1B1B] hover:text-white transition"
              >
                Conheça a loja
              </Link>
            </div>
          </div>

          {/* IMAGEM */}
          <div className="hidden md:block">
            <img
              src={heroImage}
              alt="Coleção Ana Moda Fashion"
              className="rounded-2xl shadow-lg object-cover w-full h-full"
            />
          </div>

        </div>
      </section>

      {/* DESTAQUES */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-playfair mb-8">
          Produtos em destaque
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {destaques.map(produto => (
            <ProductCard
              key={produto.id}
              product={produto}
              onAddToCart={() => addToCart(produto)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/catalogo"
            className="inline-block bg-[#9E1B1B] text-white px-10 py-3 rounded-full hover:bg-[#7E1414] transition"
          >
            Ver catálogo completo
          </Link>
        </div>
      </section>
    </main>
  );
}
