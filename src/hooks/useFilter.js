import { useEffect, useState } from "react";

function useFilter(products) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [filter, setFilter] = useState({
    minPrice: 0,
    category: "all",
  });

  const filterOfProducts = (products) => {
    const newFilteredProducts = products.filter((product) => {
      //console.log(product.category);
      //console.log(filter.category);
      return (
        product.price >= filter.minPrice &&
        (filter.category == "all" || filter.category == product.category)
      );
    });

    setFilteredProducts(newFilteredProducts);
  };

  useEffect(() => {
    if (products) {
      filterOfProducts(products);
      //console.log("aca", products);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, products]);

  return { filteredProducts, setFilter };
}
export default useFilter;
