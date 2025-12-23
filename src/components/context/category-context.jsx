import { createContext, useContext, useEffect, useState } from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState(
    JSON.parse(localStorage.getItem("categories")) || []
  );

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  const addCategory = (category) => {
    setCategories([...categories, { ...category, id: Date.now() }]);
  };

  const updateCategory = (id, updated) => {
    setCategories(
      categories.map(c => (c.id === id ? updated : c))
    );
  };

  const deleteCategory = (id) => {
    setCategories(categories.filter(c => c.id !== id));
  };

  return (
    <CategoryContext.Provider
      value={{ categories, addCategory, updateCategory, deleteCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategories = () => useContext(CategoryContext);
