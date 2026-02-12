import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Nav from "./Nav";
import NotFound from "./NotFound";
import Layout from "../pages/Layout";
import Cart from "../pages/Cart";
import { useEffect, useState } from "react";

function Router() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (cart.length !== 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  useEffect(() => {
 const cartData =JSON.parse(localStorage.getItem('cart'))
if(cartData){
  setCart(cartData)
}
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout cart={cart} setCart={setCart}>
              <Home cart={cart} setCart={setCart} />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout cart={cart} setCart={setCart}>
              <Cart cart={cart} setCart={setCart} />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
