import BackToTop from "./components/Nav";
import * as React from "react";
import NavBar from "./components/NavBar";
import CardsProducts from "./components/CardsProducts";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import useFilter from "./hooks/useFilter";
import { useProductsProvider } from "./hooks/useProductsProvider";
import SliderSizes from "./components/Filter";
import Cardproduct from "./components/Cardproduct";

function App() {
  const { products } = useProductsProvider();

  const { filteredProducts, setFilter } = useFilter(products);
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<h1>app</h1>} />
          <Route
            path="products"
            element={
              <>
                <SliderSizes setFilter={setFilter} />
                <div className="contenedor">
                  <CardsProducts productsFiltered={filteredProducts || []} />
                </div>
              </>
            }
          />
          <Route
            path="products/:idProduct"
            element={<Cardproduct productsFiltered={filteredProducts} />}
          />
        </Route>

        <Route path="*" element={<h1>error 404</h1>} />
      </Routes>

      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
