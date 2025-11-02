// components/Header.js

import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useCart } from '../context/CartContext'; // Importamos nuestro hook

// Un componente simple para el ícono del carrito (SVG)
const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);


const Header = () => {
  const { cartItems } = useCart(); // Usamos el hook para acceder al carrito

  // Calculamos el número total de artículos (sumando las cantidades)
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link href="/">ARAMÉ</Link>
        </div>
        
       

        {/* --- NUEVO ICONO DE CARRITO --- */}
        <div className={styles.headerActions}>
          <Link href="/carrito" className={styles.cartLink}>
            <CartIcon />
            {itemCount > 0 && (
              <span className={styles.cartCount}>{itemCount}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;