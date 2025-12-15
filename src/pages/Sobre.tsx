import React, { useState } from "react";

const Sobre: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

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
    // Adicione os outros orixás copiando do seu HTML original
  ];

  return (
    <div className="font-sans m-0 p-0 bg-sky-custom text-gray-800 text-center leading-relaxed">
      <header className="py-6 px-5 bg-sky-200 shadow-md">
        <h1 className="text-3xl text-gray-700 mb-1">
          ✨ As Divinas Cores Pastéis das Orixás ✨
        </h1>
        <p className="text-gray-600 text-lg">
          Explore a energia suave de cada Orixá e o significado de suas cores.
          Clique nas "cortinas" para revelar seus segredos.
        </p>
      </header>
      <main className="max-w-2xl mx-auto py-8 px-4">
        {orixas.map((orixa) => (
          <div
            key={orixa.id}
            className={`mb-4 p-5 text-gray-800 cursor-pointer rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 border border-gray-100 text-left ${orixa.color}`}
          >
            <h2 className="m-0 text-xl font-semibold">{orixa.name}</h2>
            <div
              className={`max-h-0 opacity-0 overflow-hidden bg-white text-gray-800 p-0 mt-3 rounded-b-xl text-left transition-all duration-600 shadow-md border border-gray-100 border-t-0 ${
                openId === orixa.id ? "max-h-96 opacity-100 p-6" : ""
              }`}
            >
              <h3 className="border-b-4 pb-2 m-0 text-xl text-gray-700">
                {orixa.emoji} {orixa.title}
              </h3>
              <p>{orixa.desc}</p>
            </div>
          </div>
        ))}
      </main>
      <section id="medidas" className="p-10 text-center bg-white mt-10">
        <h2 className="text-gray-800 mb-10 text-3xl font-bold">
          Tabela de Medidas
        </h2>
        <div className="overflow-x-auto">
          <table className="mx-auto border-collapse bg-white border border-gray-800 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="border border-gray-800 p-4">Tamanho</th>
                <th className="border border-gray-800 p-4">
                  Circunferência (cm)
                </th>
                <th className="border border-gray-800 p-4">Diâmetro (cm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-800 p-4">Pequeno</td>
                <td className="border border-gray-800 p-4">5.5</td>
                <td className="border border-gray-800 p-4">1.75</td>
              </tr>
              <tr>
                <td className="border border-gray-800 p-4">Médio</td>
                <td className="border border-gray-800 p-4">6.0</td>
                <td className="border border-gray-800 p-4">1.91</td>
              </tr>
              <tr>
                <td className="border border-gray-800 p-4">Grande</td>
                <td className="border border-gray-800 p-4">6.5</td>
                <td className="border border-gray-800 p-4">2.07</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
