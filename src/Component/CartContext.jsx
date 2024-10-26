import { createContext, useState, useEffect } from "react";

export const CartDataContext = createContext(null);

const CartContext = ({ children }) => {
  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (cartData?.state?.cart) {
      setCartItems(cartData.state.cart);
      setCart(cartData.state.cart.length); 
    }
  }, []);

  const addToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    setCart(updatedCart.length);
    localStorage.setItem(
      "cart",
      JSON.stringify({ state: { cart: updatedCart }, version: 0 })
    );
  };

  const removeFromCart = () => {
    setCartItems([]);
    setCart(0);
    localStorage.removeItem("cart");
  };

  const authInfo = {
    cart,
    setCart,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <CartDataContext.Provider value={authInfo}>
      {children}
    </CartDataContext.Provider>
  );
};

export default CartContext;
