import React, { useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Home: React.FC = () => {
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

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const products = [
    {
      id: 1,
      title: "Anel de Prata",
      desc: "Anel elegante de prata",
      price: 150.0,
      img: "https://picsum.photos/300/200",
      category: "joias",
    },
    {
      id: 2,
      title: "Colar de Prata",
      desc: "Colar fino de prata",
      price: 200.0,
      img: "https://picsum.photos/300/200",
      category: "joias",
    },
    {
      id: 3,
      title: "Pulseira de Prata",
      desc: "Pulseira confortável de prata",
      price: 120.0,
      img: "https://picsum.photos/300/200",
      category: "joias",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-custom to-white">
      <nav className="bg-gray-800 px-5 py-4 flex justify-between items-center shadow-lg">
        <div className="flex-shrink-0 text-white font-bold text-2xl">
          Yabas Pratas
        </div>
        <ul className="hidden md:flex list-none m-0 p-0 space-x-6">
          <li>
            <Link
              to="/"
              className="text-white no-underline hover:text-gray-200 transition"
            >
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
            </div>
          </Link>
        </div>
      </nav>

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
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
          >
            ›
          </button>
        </div>
      </section>

      <section id="catalogo" className="p-10 text-center bg-gray-50">
        <h2 className="text-gray-800 mb-10 text-3xl font-bold">
          Catálogo em Destaque
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">
                R$ {product.price.toFixed(2)}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-sky-custom transition"
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="p-10 text-center bg-white">
        <h2 className="text-gray-800 mb-10 text-3xl font-bold">
          O que Nossos Clientes Dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              "Joias incríveis, qualidade excepcional!"
            </p>
            <p className="font-semibold">- Cliente 1</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              "Recomendo para todos os amantes de prata."
            </p>
            <p className="font-semibold">- Cliente 2</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              "Entrega rápida e atendimento ótimo."
            </p>
            <p className="font-semibold">- Cliente 3</p>
          </div>
        </div>
      </section>

      <section className="p-10 text-center bg-gray-50">
        <h2 className="text-gray-800 mb-10 text-3xl font-bold">
          Perguntas Frequentes
        </h2>
        <div className="max-w-2xl mx-auto text-left">
          <div className="mb-4">
            <h3 className="font-semibold">Como cuidar das joias?</h3>
            <p className="text-gray-600">
              Limpe com um pano macio e evite exposição prolongada à umidade.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Há garantia?</h3>
            <p className="text-gray-600">
              Sim, 1 ano contra defeitos de fabricação.
            </p>
          </div>
        </div>
      </section>

      <section className="p-10 text-center bg-white">
        <h2 className="text-gray-800 mb-10 text-3xl font-bold">
          Entre em Contato
        </h2>
        <p className="text-gray-600 mb-6">Dúvidas? Fale conosco!</p>
        <Link
          to="/sobre"
          className="bg-sky-custom text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Saiba Mais
        </Link>
      </section>
    </div>
  );
};

export default Home;
