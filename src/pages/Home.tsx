import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";

import imagem1 from "../assets/images/imagem6.png";
import imagem2 from "../assets/images/imagem1.png";
import imagem3 from "../assets/images/imagem3.png";

const Home = () => {
  const { theme } = useTheme();
  const { addToCart } = useCart();

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: imagem1,
      title: "Yabás Pratas",
      text: "Joias em prata com ancestralidade, força e significado",
    },
    {
      image: imagem2,
      title: "Coleções Exclusivas",
      text: "Design autoral inspirado na força feminina",
    },
    {
      image: imagem3,
      title: "Elegância Atemporal",
      text: "Prata 925 para todos os momentos",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const bgBase =
    theme === "light"
      ? "bg-sky-custom text-gray-800"
      : "bg-sky-custom-dark text-white";

  const products = [
    {
      id: 1,
      title: "Anel de Prata",
      price: 150,
      img: imagem1,
    },
    {
      id: 2,
      title: "Colar de Prata",
      price: 200,
      img: imagem2,
    },
    {
      id: 3,
      title: "Pulseira de Prata",
      price: 120,
      img: imagem3,
    },
  ];

  return (
    <div className={`${bgBase} transition-colors duration-300`}>
      {/* HERO / SLIDER */}
      <section className="relative h-[75vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center max-w-2xl px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  {slide.text}
                </p>
                <Link
                  to="/catalogo"
                  className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
                >
                  Ver Catálogo
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Controles */}
        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + slides.length) % slides.length
            )
          }
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % slides.length)
          }
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition"
        >
          <ChevronRight />
        </button>
      </section>

      {/* DESTAQUES */}
      <section className="py-20 px-6 bg-white text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">
          Destaques da Coleção
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition"
            >
              <img
                src={product.img}
                alt={product.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">
                  {product.title}
                </h3>
                <p className="mb-4 font-medium">
                  R$ {product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-sky-custom transition"
                >
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
