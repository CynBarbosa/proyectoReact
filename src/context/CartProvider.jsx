import { createContext, useState } from "react";

export const cartContext = createContext();

const CartProvider = cartContext.Provider;

function CostumeCartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  const cambiarCantidad = (auxCart, elementoExistente, nuevaCant) => {
    const index = cart.indexOf(elementoExistente);
    auxCart[index].quantity += nuevaCant;
    setCantidadTotal(nuevaCant + cantidadTotal);
    setCart(auxCart);
  };

  const pushItem = (nuevoItem, nuevaCant, auxCart) => {
    auxCart.push({ item: nuevoItem, quantity: nuevaCant });
    setCantidadTotal(nuevaCant + cantidadTotal);
    setCart(auxCart);
  };

  const addItem = (nuevoItem, nuevaCant) => {
    const elementoExistente = cart.find((e) => e.item.id === nuevoItem.id);
    const auxCart = [...cart];
    elementoExistente === undefined
      ? pushItem(nuevoItem, nuevaCant, auxCart)
      : cambiarCantidad(auxCart, elementoExistente, nuevaCant);
  };

  const removeItem = (itemId) => {
    const itemElegido = cart.filter((e) => e.item.id === itemId);
    const auxCantidad = cantidadTotal - itemElegido[0].quantity;
    const newCart = cart.filter((e) => e.item.id !== itemId);
    setCart(newCart);
    setCantidadTotal(auxCantidad);
  };

  const clear = () => {
    setCart([]);
    setCantidadTotal(0);
  };

  const isInCart = (id) => {
    const currentItem = cart.find((e) => e.item.id === id);
    return currentItem ? true : false;
  };

  const valorContexto = {
    cantidad: cantidadTotal,
  };

  return (
    <CartProvider
      value={{ addItem, removeItem, clear, isInCart, cantidadTotal, cart }}
    >
      {children}
    </CartProvider>
  );
}

export default CostumeCartProvider;
