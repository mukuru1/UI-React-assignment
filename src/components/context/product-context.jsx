import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) =>
    setProducts([...products, { ...product, id: Date.now() }]);

  const updateProduct = (id, updated) =>
    setProducts(products.map(p => p.id === id ? updated : p));

  const deleteProduct = (id) =>
    setProducts(products.filter(p => p.id !== id));

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
