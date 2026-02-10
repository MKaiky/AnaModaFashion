type Pedido = {
  id: number;
  cliente: string;
  data: string;
  total: string;
  status: "pendente" | "pago" | "enviado";
};

const pedidos: Pedido[] = [
  {
    id: 1,
    cliente: "Maria Silva",
    data: "08/02/2026",
    total: "R$ 199,90",
    status: "pendente",
  },
  {
    id: 2,
    cliente: "João Pereira",
    data: "07/02/2026",
    total: "R$ 349,90",
    status: "pago",
  },
  {
    id: 3,
    cliente: "Ana Souza",
    data: "06/02/2026",
    total: "R$ 129,90",
    status: "enviado",
  },
];

export default function Pedidos() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      
      {/* TÍTULO */}
      <div className="mb-10">
        <h1 className="text-4xl font-semibold text-[#111]">Pedidos</h1>
        <p className="text-gray-500 mt-2">
          Gerencie os pedidos feitos na loja
        </p>
      </div>

      {/* TABELA */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-left text-sm text-gray-500">
              <th className="py-4 px-6">Cliente</th>
              <th>Data</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {pedidos.map(pedido => (
              <tr key={pedido.id} className="border-b last:border-none">
                <td className="py-4 px-6 font-medium">
                  {pedido.cliente}
                </td>
                <td>{pedido.data}</td>
                <td>{pedido.total}</td>
                <td>
                  <StatusBadge status={pedido.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

function StatusBadge({ status }: { status: Pedido["status"] }) {
  const styles = {
    pendente: "bg-yellow-100 text-yellow-700",
    pago: "bg-green-100 text-green-700",
    enviado: "bg-blue-100 text-blue-700",
  };

  const labels = {
    pendente: "Pendente",
    pago: "Pago",
    enviado: "Enviado",
  };

  return (
    <span
      className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}
