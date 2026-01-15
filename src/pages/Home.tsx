<<<<<<< HEAD
import { useState } from "react";
=======
import React, { useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
>>>>>>> d2d0ec29a1b52ac8ec890a1941868a1b0091f052
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Home = () => {
  const { addToCart } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Bem-vindo à Yabas Pratas",
      text: "Descubra joias de prata de alta qualidade",
      button: "Ver Catálogo",
      bg: "from-sky-custom to-gray-800",
    },
    {
      title: "Coleção Exclusiva",
      text: "Pratas finas para todos os momentos",
      button: "Explorar",
      bg: "from-gray-800 to-sky-custom",
    },
    {
      title: "Elegância em Prata",
      text: "Encontre o acessório perfeito",
      button: "Comprar Agora",
      bg: "from-sky-custom to-blue-200",
    },
  ];

<<<<<<< HEAD
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

=======
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
>>>>>>> d2d0ec29a1b52ac8ec890a1941868a1b0091f052
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const products = [
    {
      id: 1,
      title: "Anel de Prata",
      price: 150,
      img: "https://picsum.photos/300/200",
    },
    {
      id: 2,
      title: "Colar de Prata",
      price: 200,
      img: "https://picsum.photos/300/200",
    },
    {
      id: 3,
      title: "Pulseira de Prata",
      price: 120,
      img: "https://picsum.photos/300/200",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-sky-custom to-white">
      {/* HERO / SLIDER */}
      <section className="p-6">
        <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center bg-gradient-to-r ${slide.bg}
              transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
<<<<<<< HEAD
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                <p className="mb-6">{slide.text}</p>
                <Link
                  to="/catalogo"
                  className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100"
                >
                  {slide.button}
                </Link>
              </div>
=======
              Início
            </Link>
          </li>
          <li>
            <Link
              to="/catalogo"
              className="text-white no-underline hover:text-gray-200 transition"
            >
              Catálogo
            </Link>
          </li>
          <li>
            <Link
              to="/sobre"
              className="text-white no-underline hover:text-gray-200 transition"
            >
              Sobre
            </Link>
          </li>
        </ul>
        <div className="flex gap-4">
          <div className="text-white cursor-pointer hover:text-gray-200 transition">
            <React.Fragment>{FaUser({ size: 24 })}</React.Fragment>
          </div>
          <Link to="/carrinho">
            <div className="text-white cursor-pointer hover:text-gray-200 transition">
              <React.Fragment>{FaShoppingCart({ size: 24 })}</React.Fragment>
>>>>>>> d2d0ec29a1b52ac8ec890a1941868a1b0091f052
            </div>
          ))}

<<<<<<< HEAD
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 p-2 rounded-full"
=======
      <section id="inicio" className="relative p-5">
        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center bg-gradient-to-r ${
                slide.bg
              } text-white transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg mb-6">{slide.text}</p>
                <Link
                  to="/catalogo"
                  className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                  {slide.button}
                </Link>
              </div>
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
>>>>>>> d2d0ec29a1b52ac8ec890a1941868a1b0091f052
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
<<<<<<< HEAD
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 p-2 rounded-full"
=======
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
>>>>>>> d2d0ec29a1b52ac8ec890a1941868a1b0091f052
          >
            ›
          </button>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section className="p-10 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-10">Catálogo em Destaque</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition"
            >
              <img
                src={product.img}
                alt={product.title}
                className="h-48 w-full object-cover rounded mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">
                {product.title}
              </h3>
              <p className="mb-4">R$ {product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-sky-custom"
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
