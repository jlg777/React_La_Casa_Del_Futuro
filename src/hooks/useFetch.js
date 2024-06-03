import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [products, setProducts] = useState([]);

  const getFetch = async () => {
    try {
      if (!url) return;

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Error al obtener los datos");
      }

      const data = await res.json();
      setProducts(data.products);
      // console.log(products);
    } catch (error) {
      console.log(error);
      setProducts(null); // Limpiar los datos en caso de error
    }
  };

  useEffect(() => {
    getFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return products;
};
