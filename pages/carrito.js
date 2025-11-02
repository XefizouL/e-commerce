// pages/carrito.js

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import { useCart } from '../context/CartContext';
import styles from '../styles/Carrito.module.css';

const CarritoPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Head>
        <title>Tu Carrito de Compras</title>
      </Head>
      <Header />
      <main className={styles.container}>
        <h1>Tu Carrito</h1>
        
        {cartItems.length === 0 ? (
          <div className={styles.emptyCart}>
            <p>Tu carrito está vacío.</p>
            <Link href="/" className={styles.goShoppingButton}>
              Seguir comprando
            </Link>
          </div>
        ) : (
          <div className={styles.cartGrid}>
            <div className={styles.cartItems}>
              {cartItems.map(item => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemImage}>
                    <Image src={item.image} alt={item.name} width={100} height={100} objectFit="cover" />
                  </div>
                  <div className={styles.itemDetails}>
                    <h3>{item.name}</h3>
                    <p>${item.price.toFixed(2)}</p>
                    <div className={styles.itemActions}>
                      <label>Cantidad:</label>
                      <input 
                        type="number" 
                        min="1" 
                        value={item.quantity} 
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className={styles.quantityInput}
                      />
                      <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.cartSummary}>
              <h2>Resumen del Pedido</h2>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <div className={styles.summaryTotal}>
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button className={styles.checkoutButton}>Finalizar Compra</button>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default CarritoPage;