import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
//import "./index.css";
import "./styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import { ProductsProviders } from "./providers/productsProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsProviders>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductsProviders>
  </React.StrictMode>
);
