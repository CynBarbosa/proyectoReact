import { createContext, useState } from "react";

const cartContext = createContext();

const CartProvider = cartContext.Provider;

function CostumeCartProvider({ children }) {
  // const [ cart, setCart] = useState([]) => crea estado vacio del carrito

  // addCart => agregar al carrito

  // deleteCart => borrar productos del carrito

  //emptyCart => vaciar carrito

  //queantyCart => cantidad de productos

  //totalCart => total del precio
  return <CartProvider>{children}</CartProvider>;
}

export default CostumeCartProvider;
