import { useProducts } from "../../context/ProductContext";

const ProductTable = () => {
  const { products } = useProducts();

  return (
    <div className="space-y-4">
      {products.map(p => (
        <div
          key={p.id}
          className="flex justify-between items-center border p-4 rounded"
        >
          <span>{p.name}</span>
          <span>R$ {p.price}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductTable;
