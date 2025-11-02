// context/CartContext.js

import { createContext, useState, useContext } from 'react';

// 1. Creamos el Contexto
const CartContext = createContext();

// 2. Creamos el Proveedor del Contexto (el que maneja el estado)
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Revisa si el producto ya está en el carrito
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      // Si ya existe, solo aumenta la cantidad
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // Si es nuevo, lo añade al carrito con cantidad 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };
  
  // (Opcional pero útil) Función para actualizar la cantidad
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Creamos un "hook" personalizado para usar el contexto más fácil
export const useCart = () => {
  return useContext(CartContext);
};