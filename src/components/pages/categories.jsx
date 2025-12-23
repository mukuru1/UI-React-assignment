import { useState } from "react";
import { useCategories } from "../context/CategoryContext";

export default function Categories() {
  const { categories, addCategory, deleteCategory } = useCategories();
  const [name, setName] = useState("");

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Categories</h2>

      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-1"
          placeholder="Category name"
          onChange={e => setName(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-4"
          onClick={() => addCategory({ name })}
        >
          Add
        </button>
      </div>

      <div className="grid gap-2 md:grid-cols-3">
        {categories.map(c => (
          <div key={c.id} className="border p-2 flex justify-between">
            <span>{c.name}</span>
            <button
              onClick={() => deleteCategory(c.id)}
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
