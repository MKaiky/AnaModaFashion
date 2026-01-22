import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/images/logo-branca.png";

/**
 * Componente Footer
 *
 * Responsável por exibir o rodapé da aplicação.
 * Contém informações institucionais, contatos, redes sociais
 * e se adapta automaticamente ao tema (claro/escuro).
 *
 * Utiliza:
 * - React Router para navegação interna
 * - Context API para controle de tema
 * - Tailwind CSS para estilização
 */
const Footer = () => {
  /**
   * Obtém o tema atual da aplicação através do ThemeContext
   */
  const { theme } = useTheme();

  /**
   * Define as classes CSS dinamicamente de acordo com o tema ativo
   */
  const themeClasses =
    theme === "light"
      ? "bg-sky-custom text-gray-800"
      : "bg-sky-custom-dark text-white";

  return (
    <footer className={`${themeClasses} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Seção: Logo e descrição da marca */}
        <div>
          <img src={logo} alt="Yabás Pratas" className="h-14 mb-4" />
          <p className="text-sm opacity-90">
            Joias em prata com ancestralidade, significado e força feminina.
          </p>
        </div>

        {/* Seção: Links institucionais */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4">
            Institucional
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/sobre">Sobre a Yabás</Link></li>
            <li><Link to="/catalogo">Catálogo</Link></li>
            <li>Política de Privacidade</li>
            <li>Trocas e Devoluções</li>
          </ul>
        </div>

        {/* Seção: Informações de atendimento */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4">
            Atendimento
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> contato@yabas.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> (00) 00000-0000
            </li>
            <li>Seg a Sex — 9h às 18h</li>
          </ul>
        </div>

        {/* Seção: Redes sociais */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4">
            Siga-nos
          </h3>
          <div className="flex gap-4">
            <Instagram />
            <Facebook />
          </div>
        </div>
      </div>

      {/* Direitos autorais */}
      <div className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-center opacity-80">
          © {new Date().getFullYear()} Yabás Pratas. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
