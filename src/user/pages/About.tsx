export default function Sobre() {
  return (
    <main>
      {/* HERO SOBRE */}
      <section className="bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-[#111] mb-6">
            Sobre a Ana Moda Fashion
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Moda pensada para quem valoriza estilo, qualidade e uma experiência
            de compra simples e segura.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-start">
          
          {/* TEXTO */}
          <div>
            <h2 className="font-playfair text-3xl text-[#111] mb-6">
              O que vendemos e como funciona
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              A <strong>Ana Moda Fashion</strong> oferece moda feminina,
              masculina, infantil e calçados cuidadosamente selecionados,
              unindo conforto, elegância e qualidade para o dia a dia e
              ocasiões especiais.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Nossa compra é simples e prática. Você escolhe os produtos pelo
              catálogo, finaliza o pedido e nossa equipe entra em contato para
              confirmar as informações. Após a confirmação, o pedido é separado
              com atenção e preparado para envio ou retirada.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Trabalhamos para garantir uma experiência segura, organizada e
              satisfatória do início ao fim.
            </p>
          </div>

          {/* DESTAQUES */}
          <div className="bg-[#F7F7F7] rounded-2xl p-10 space-y-6">
            {[
              {
                title: "Variedade de produtos",
                text: "Moda feminina, masculina, infantil e calçados em um só lugar."
              },
              {
                title: "Compra facilitada",
                text: "Processo simples, rápido e com atendimento personalizado."
              },
              {
                title: "Segurança e confiança",
                text: "Pedidos conferidos com cuidado para sua tranquilidade."
              }
            ].map((item, index) => (
              <div key={index}>
                <h3 className="font-medium text-[#111] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
