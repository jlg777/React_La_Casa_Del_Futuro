import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";

//1.crear el contexto
export const ProductsContext = createContext();

//2.Proveer contexto
export function ProductsProviders({ children }) {
  const products = useFetch("https://dummyjson.com/products?limit=15");
  return (
    <ProductsContext.Provider value={{ products: products }}>
      {children}
    </ProductsContext.Provider>
  );
}
