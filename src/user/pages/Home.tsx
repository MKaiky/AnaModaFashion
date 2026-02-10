import heroImage from "../../assets/images/hero.png";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          
          {/* TEXTO */}
          <div>
            <h1 className="font-playfair text-5xl leading-tight text-[#111] mb-6">
              Elegância que <br /> transforma o seu estilo
            </h1>

            <p className="text-gray-600 mb-8 max-w-md">
              Moda feminina, masculina, infantil e calçados selecionados para
              quem valoriza sofisticação no dia a dia.
            </p>

            <div className="flex gap-4">
              <a
                href="/catalogo"
                className="bg-[#9E1B1B] text-white px-8 py-3 rounded-full hover:bg-[#7E1414] transition"
              >
                Ver catálogo
              </a>

              <a
                href="/sobre"
                className="border border-[#9E1B1B] text-[#9E1B1B] px-8 py-3 rounded-full hover:bg-[#9E1B1B] hover:text-white transition"
              >
                Conheça a loja
              </a>
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
    </main>
  );
}
