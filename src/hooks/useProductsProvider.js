import { useContext } from "react";
import { ProductsContext } from "../providers/productsProvider";

//3.Consumir contexto
export const useProductsProvider = () => useContext(ProductsContext);
