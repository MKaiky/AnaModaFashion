/**
 * Página Sobre
 *
 * Responsável por:
 * - Apresentar a identidade da marca Yabás Pratas
 * - Explicar o conceito das Yabás (orixás femininas)
 * - Exibir conteúdo interativo com expansão de informações
 */

import { useState } from "react";
import {
  Droplets,
  Sparkles,
  Wind,
  Infinity,
} from "lucide-react";

/**
 * Tipagem de uma Yabá (orixá feminina)
 */
type Yaba = {
  /** Identificador único */
  id: number;

  /** Nome da orixá */
  nome: string;

  /** Título simbólico */
  titulo: string;

  /** Descrição detalhada */
  descricao: string;

  /** Cor de destaque do card */
  cor: string;

  /** Ícone representativo */
  Icone: React.ElementType;
};

/**
 * Lista fixa das Yabás apresentadas na página
 */
const yabas: Yaba[] = [
  {
    id: 1,
    nome: "Yemanjá",
    titulo: "A mãe das águas",
    descricao:
      "Yemanjá representa o cuidado, a maternidade e a proteção. Senhora dos mares, simboliza acolhimento, força feminina e a fluidez da vida.",
    cor: "bg-sky-200",
    Icone: Droplets,
  },
  {
    id: 2,
    nome: "Oxum",
    titulo: "O amor e a beleza",
    descricao:
      "Oxum é a orixá das águas doces, do amor, da autoestima e da prosperidade. Representa o feminino delicado e poderoso.",
    cor: "bg-yellow-200",
    Icone: Sparkles,
  },
  {
    id: 3,
    nome: "Iansã (Oyá)",
    titulo: "A força dos ventos",
    descricao:
      "Iansã simboliza coragem, movimento e transformação. Guerreira e intensa, rege os ventos e as mudanças.",
    cor: "bg-rose-200",
    Icone: Wind,
  },
  {
    id: 4,
    nome: "Nanã",
    titulo: "A sabedoria ancestral",
    descricao:
      "Nanã é a mais antiga das orixás femininas. Representa o tempo, a ancestralidade e o ciclo da vida.",
    cor: "bg-purple-200",
    Icone: Infinity,
  },
];

/**
 * Componente Sobre
 */
const Sobre: React.FC = () => {
  /** ID do card atualmente aberto */
  const [idAberto, setIdAberto] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 text-gray-800">
      {/* ===== INTRODUÇÃO ===== */}
      <header className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold mb-4">
          A essência da Yabás Pratas
        </h1>

        <p className="text-gray-600">
          Joias em prata 925 que carregam significado,
          ancestralidade e força feminina.
        </p>
      </header>

      {/* ===== YABÁS ===== */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          As Yabás — Orixás Femininas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {yabas.map((yaba) => {
            const aberto = idAberto === yaba.id;

            return (
              <div
                key={yaba.id}
                className={`rounded-3xl p-6 cursor-pointer transition-all duration-300 hover:brightness-95 ${yaba.cor}`}
                onClick={() =>
                  setIdAberto(aberto ? null : yaba.id)
                }
              >
                {/* Cabeçalho do card */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/70">
                    <yaba.Icone className="w-6 h-6 text-gray-700" />
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">
                      {yaba.nome}
                    </h3>
                    <span className="text-sm text-gray-600">
                      {yaba.titulo}
                    </span>
                  </div>
                </div>

                {/* Conteúdo expandido */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    aberto
                      ? "max-h-96 opacity-100 mt-5"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-5 text-sm shadow-sm">
                    <p className="text-gray-600 leading-relaxed">
                      {yaba.descricao}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== SOBRE A MARCA ===== */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl font-semibold mb-8">
          Sobre a Yabás Pratas
        </h2>

        <p className="text-gray-600 leading-relaxed">
          A Yabás Pratas nasceu com o propósito de criar
          joias em prata 925 que unem beleza, identidade e
          ancestralidade.
          <br />
          <br />
          Inspirada nas Yabás — as orixás femininas —
          a marca valoriza a força, a sensibilidade e a
          individualidade da mulher.
        </p>
      </section>
    </section>
  );
};

export default Sobre;
