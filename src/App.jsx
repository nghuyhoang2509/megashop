import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import "normalize.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import MaxScreenLayout from "./layouts/MaxScreenLayout";
import AuthProvider from "./context/AuthProvider";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "./store/cart/cart.action";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <div className="relative">
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
              <Route
                path="/cart"
                element={
                  <MaxScreenLayout>
                    <Cart />
                  </MaxScreenLayout>
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
