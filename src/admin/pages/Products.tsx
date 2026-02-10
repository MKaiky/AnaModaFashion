export default function Produtos() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl mb-10">Produtos</h1>

      <div className="mb-8">
        <button className="bg-black text-white px-6 py-3 rounded-xl">
          + Novo Produto
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border rounded-xl p-4">
          <div className="h-40 bg-gray-200 rounded-lg mb-4" />
          <h2 className="font-medium">Produto Exemplo</h2>
          <p className="text-sm text-gray-500">Categoria</p>
          <span className="font-medium block mt-2">R$ 99,90</span>
        </div>
      </div>
    </main>
  );
}
