import React from "react";
import Slider from "react-slick";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home: React.FC = () => {
  const { addToCart } = useCart();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

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
            <FaUser size={24} />
          </div>
          <Link to="/carrinho">
            <div className="text-white cursor-pointer hover:text-gray-200 transition">
              <FaShoppingCart size={24} />
            </div>
          </Link>
        </div>
      </nav>

      <section id="inicio" className="relative p-5">
        <Slider {...sliderSettings} className="rounded-lg shadow-lg">
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-r from-sky-custom to-gray-800 flex items-center justify-center rounded-lg">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-4">
                  Bem-vindo à Yabas Pratas
                </h1>
                <p className="text-lg mb-6">
                  Descubra joias de prata de alta qualidade
                </p>
                <Link
                  to="/catalogo"
                  className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                  Ver Catálogo
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-r from-gray-800 to-sky-custom flex items-center justify-center rounded-lg">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Coleção Exclusiva</h1>
                <p className="text-lg mb-6">
                  Pratas finas para todos os momentos
                </p>
                <Link
                  to="/catalogo"
                  className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                  Explorar
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-r from-sky-custom to-blue-200 flex items-center justify-center rounded-lg">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Elegância em Prata</h1>
                <p className="text-lg mb-6">Encontre o acessório perfeito</p>
                <Link
                  to="/catalogo"
                  className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                  Comprar Agora
                </Link>
              </div>
            </div>
          </div>
        </Slider>
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
