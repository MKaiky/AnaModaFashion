import React, { useState } from "react";
import {
  Droplets,
  Sparkles,
  Wind,
  Infinity,
} from "lucide-react";

type Orixa = {
  id: number;
  name: string;
  title: string;
  desc: string;
  color: string;
  Icon: React.ElementType;
};

const orixas: Orixa[] = [
  {
    id: 1,
    name: "Yemanjá",
    title: "A mãe das águas",
    desc: "Yemanjá representa o cuidado, a maternidade e a proteção. Senhora dos mares, simboliza acolhimento, força feminina e a fluidez da vida. Sua energia está ligada ao amor profundo e à proteção da família.",
    color: "bg-sky-200",
    Icon: Droplets,
  },
  {
    id: 2,
    name: "Oxum",
    title: "O amor e a beleza",
    desc: "Oxum é a orixá das águas doces, do amor, da autoestima e da prosperidade. Representa o feminino delicado e poderoso, ligado à beleza, fertilidade e ao cuidado consigo.",
    color: "bg-yellow-200",
    Icon: Sparkles,
  },
  {
    id: 3,
    name: "Iansã (Oyá)",
    title: "A força dos ventos",
    desc: "Iansã simboliza coragem, movimento e transformação. Guerreira e intensa, rege os ventos e as mudanças, representando mulheres livres e em constante evolução.",
    color: "bg-rose-200",
    Icon: Wind,
  },
  {
    id: 4,
    name: "Nanã",
    title: "A sabedoria ancestral",
    desc: "Nanã é a mais antiga das orixás femininas. Representa o tempo, a ancestralidade e o ciclo da vida, trazendo paciência, respeito às origens e profundidade espiritual.",
    color: "bg-purple-200",
    Icon: Infinity,
  },
];

const Sobre: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

<<<<<<< HEAD
=======
  const togglePasta = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const orixas = [
    {
      id: 1,
      name: "OXALÁ",
      color: "bg-pastel-white",
      emoji: "🕊️",
      title: "Oxalá: O Pai da Criação e da Paz",
      desc: "O Branco evoca a pureza, a calma, a sabedoria e a origem de todas as coisas. É a luz suave do princípio. Domínio: Céu, criação, ar, paz e a essência da vida. Saudação: Epa Babá! Características: A divindade maior, pacificador e benevolente. Rege a vida, a saúde, a moralidade e a ordem. É o grande orixá que estabelece a harmonia.",
    },
    {
      id: 2,
      name: "YEMENJÁ",
      color: "bg-pastel-blue",
      emoji: "🌊",
      title: "Yemanjá: A Mãe das Águas e da Vida",
      desc: "O Azul reflete a serenidade, a profundidade e a vastidão acolhedora dos oceanos. Representa a maternidade, a proteção e a fluidez da existência. Domínio: Mares, lagos, águas salgadas, maternidade e a vida. Saudação: Odoyá! Características: Protetora da família, generosa e sábia. É a grande mãe que nutre e acalma, mas que também pode mostrar a força incontrolável das marés.",
    },
    {
      id: 3,
      name: "OXUM",
      color: "bg-pastel-yellow",
      emoji: "👑",
      title: "Oxum: A Senhora da Beleza e do Amor",
      desc: "O Amarelo simboliza a doçura, a beleza, o amor, a prosperidade e a fertilidade. Remete ao mel, ao ouro e ao brilho suave do sol nas águas doces. Domínio: Rios, cachoeiras, águas doces, amor, beleza e riqueza. Saudação: Ora Yê Yê Ô! Características: Vaidosa, sensual e ligada à fertilidade e à sedução. Traz a doçura, o encanto e o cuidado, com a astúcia de quem sabe usar o charme para conquistar.",
    },
    {
      id: 4,
      name: "OXÓSSI",
      color: "bg-pastel-green",
      emoji: "🏹",
      title: "Oxóssi: O Caçador da Abundância",
      desc: "O Verde representa a natureza em sua forma mais leve, a fartura, a caça, o conhecimento e a prosperidade. É a cor da expansão e do sustento vindo das matas. Domínio: Matas, florestas, caça, fartura, conhecimento e provisão. Saudação: Okê Arô! Características: Inteligente, ágil e provedor. É o Orixá da fartura, que busca o conhecimento e o sustento, sempre generoso com seus filhos.",
    },
    {
      id: 5,
      name: "IANSÃ",
      color: "bg-pastel-pink",
      emoji: "⚡",
      title: "Iansã/Oyá: A Guerreira dos Ventos",
      desc: "O Rosa evoca a paixão, a transformação, o movimento e a coragem, mas com uma suavidade que representa a capacidade de renovação após a tempestade. Domínio: Ventos, tempestades, raios, transformações e a passagem para a vida após a morte (Eguns). Saudação: Eparrey! Características: Guerreira destemida, independente e de temperamento forte, porém justa. Governa as mudanças e remove os obstáculos, sempre em movimento.",
    },
    {
      id: 6,
      name: "XANGÔ",
      color: "bg-pastel-brown",
      emoji: "⚖️",
      title: "Xangô: O Rei da Justiça e do Trovão",
      desc: "O Marrom simboliza a justiça, a realeza, a estabilidade e a força da terra. Remete à autoridade e à retidão. Domínio: Justiça, fogo, raios, trovões, pedreiras e as leis divinas. Saudação: Kaô Kabecile! Características: Rei, justo e de forte personalidade. É o Orixá que pune os injustos e protege os oprimidos, sempre com equilíbrio e sabedoria.",
    },
    {
      id: 7,
      name: "NANÃ BURUQUÊ",
      color: "bg-pastel-lavender",
      emoji: "👵",
      title: "Nanã Buruquê: A Anciã da Sabedoria",
      desc: "O Lilás representa a sabedoria ancestral, a espiritualidade profunda, a calma, a transmutação e o mistério. É a cor da senilidade e do ciclo da vida. Domínio: Lodos, pântanos, lama primordial, morte e renascimento. Saudação: Saluba Nanã! Características: A mais velha das Orixás, pacífica, paciente e sábia. É a senhora da lama primordial de onde toda a vida se originou e a guardiã do portal final.",
    },
    {
      id: 8,
      name: "OBALUAÊ / OMULU",
      color: "bg-pastel-gray",
      emoji: "🙏",
      title: "Obaluaê/Omulu: O Senhor da Cura e da Terra",
      desc: "O Cinza simboliza a cura, a renovação, o silêncio, o respeito e o mistério da vida e da morte. Remete à terra, à transformação e à superação. Domínio: Terra, doenças, saúde, cura, transformação e passagem (cemitérios). Saudação: Atotô! Características: Orixá da terra, da saúde e da doença. Traz a cura e a proteção, mas também impõe respeito através de seu mistério e seu poder sobre os ciclos da vida e da morte.",
    },
  ];

>>>>>>> d2d0ec29a1b52ac8ec890a1941868a1b0091f052
  return (
    <section className="bg-gray-50 text-gray-800">
      {/* INTRO */}
      <header className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold mb-4">
          A essência da Yabás Pratas
        </h1>
        <p className="text-gray-600">
          Joias em prata 925 que carregam significado, ancestralidade e força feminina.
        </p>
      </header>

      {/* ORIXÁS */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          As Yabás — Orixás Femininas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {orixas.map((o) => {
            const isOpen = openId === o.id;
            return (
              <div
                key={o.id}
                className={`rounded-3xl p-6 cursor-pointer transition-all duration-300 hover:brightness-95 ${o.color}`}
                onClick={() => setOpenId(isOpen ? null : o.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/70">
                    <o.Icon className="w-6 h-6 text-gray-700" />
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">{o.name}</h3>
                    <span className="text-sm text-gray-600">
                      {o.title}
                    </span>
                  </div>
                </div>

                {/* CONTEÚDO EXPANDIDO */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100 mt-5" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-5 text-sm shadow-sm">
                    <p className="text-gray-600 leading-relaxed">
                      {o.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MEDIDAS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Medidas de Anéis
          </h2>

          <p className="text-center text-gray-600 mb-10">
            Utilize uma fita métrica ou linha para medir o dedo e compare com a tabela.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border text-center rounded-xl overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 border">Aro</th>
                  <th className="p-4 border">Circunferência (cm)</th>
                  <th className="p-4 border">Diâmetro (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border">16</td>
                  <td className="p-4 border">5,6</td>
                  <td className="p-4 border">1,78</td>
                </tr>
                <tr>
                  <td className="p-4 border">18</td>
                  <td className="p-4 border">5,8</td>
                  <td className="p-4 border">1,84</td>
                </tr>
                <tr>
                  <td className="p-4 border">20</td>
                  <td className="p-4 border">6,0</td>
                  <td className="p-4 border">1,91</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SOBRE A MARCA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl font-semibold mb-8">
          Sobre a Yabás Pratas
        </h2>

        <p className="text-gray-600 leading-relaxed">
          A Yabás Pratas nasceu em 2018 com o propósito de criar joias em prata 925
          que unem beleza, identidade e ancestralidade. Inspirada nas Yabás —
          as orixás femininas — a marca valoriza a força, a sensibilidade e a
          individualidade da mulher.
          <br /><br />
          Com um público diverso e alternativo, a Yabás acredita que cada joia
          acompanha histórias, ciclos e transformações, sendo mais do que um
          acessório: um símbolo.
        </p>
      </section>
    </section>
  );
};

export default Sobre;
