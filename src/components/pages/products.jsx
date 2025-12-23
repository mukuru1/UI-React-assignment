import { useState } from "react";
import { useProducts } from "../context/ProductContext";

export default function Products() {
  const { products, addProduct, deleteProduct } = useProducts();
  const [name, setName] = useState("");

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Products</h2>

      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-1"
          placeholder="Product name"
          onChange={e => setName(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4"
          onClick={() => addProduct({ name })}
        >
          Add
        </button>
      </div>

      <div className="grid gap-2 md:grid-cols-3">
        {products.map(p => (
          <div key={p.id} className="border p-2 flex justify-between">
            <span>{p.name}</span>
            <button
              onClick={() => deleteProduct(p.id)}
              className="text-red-500"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
