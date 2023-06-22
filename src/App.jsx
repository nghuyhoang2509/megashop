import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductProvider from "./context/ProductProvider";

import "normalize.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Detail from "./pages/Detail";

function App() {
  return (
    <ProductProvider>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
          <Route
            path="/product"
            element={
              <DefaultLayout>
                <Product />
              </DefaultLayout>
            }
          />
          <Route
            path="/product/:id"
            element={
              <DefaultLayout>
                <Detail />
              </DefaultLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
