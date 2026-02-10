import { Link } from "react-router-dom";
import { Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

        {/* MARCA */}
        <div>
          <h3 className="font-playfair text-xl mb-4">
            Ana Moda Fashion
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Moda feminina, masculina, infantil e calçados.
            Elegância para todas as ocasiões.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="uppercase tracking-widest mb-4 font-medium">
            Loja
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link to="/catalogo">Catálogo</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/carrinho">Carrinho</Link></li>
          </ul>
        </div>

        {/* ATENDIMENTO */}
        <div>
          <h4 className="uppercase tracking-widest mb-4 font-medium">
            Atendimento
          </h4>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <Phone size={16} /> (83) 981218132
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> contato@anamodafashion.com
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="uppercase tracking-widest mb-4 font-medium">
            Redes sociais
          </h4>
          <a
            href="https://www.instagram.com/anamodafashion___/"
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition"
          >
            <Instagram size={18} />
            Instagram da Loja
          </a>

          <a
            href="https://www.instagram.com/kodekylab/"
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition"
          >
            <Instagram size={18} />
            Instagram do Dev e Designer
          </a>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Ana Moda Fashion. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
