import {  useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart,setShowCart] = useState(false);

  const openShowCart = () => {
    setShowCart(true);
  };

  const closeShowCart=() => {
    setShowCart(false);
  };

  return (
    <CartProvider>
    {showCart && <Cart onCloseCart={closeShowCart} /> }
     <Header onShowCart={openShowCart} />
     <main>
      <Meals />
     </main>
     </CartProvider>
  );
}

export default App;
