export default function Categorias() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl mb-8">Categorias</h1>

      <div className="flex gap-4 mb-10">
        <input
          type="text"
          placeholder="Nova categoria"
          className="border px-4 py-3 rounded-lg w-full"
        />
        <button className="bg-black text-white px-6 rounded-lg">
          Adicionar
        </button>
      </div>

      <ul className="space-y-4">
        <li className="border px-4 py-3 rounded-lg flex justify-between">
          Feminino
          <button className="text-red-500 text-sm">Excluir</button>
        </li>
      </ul>
    </main>
  );
}
