// components/Header.js

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // <-- 1. IMPORTAMOS EL ROUTER
import styles from '../styles/Home.module.css';
import { useCart } from '../context/CartContext';

// ... (Los componentes de los íconos no cambian) ...
const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
);
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);


const Header = ({ className, searchTerm, onSearchChange }) => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter(); // <-- 2. INICIALIZAMOS EL ROUTER

  // El efecto de scroll no cambia, lo dejamos como está
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) { setIsScrolled(true); } else { setIsScrolled(false); }
    };
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);

  const headerClasses = `${styles.header} ${className || ''} ${isScrolled ? styles.scrolled : ''}`;

  // 3. DETERMINAMOS SI LA PÁGINA ACTUAL ES LA PÁGINA DE INICIO
  const isHomePage = router.pathname === '/';

  return (
    <header className={headerClasses}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link href="/">ARAMÉ</Link>
        </div>
        
        {/* 4. RENDERIZAMOS LA BARRA DE BÚSQUEDA SÓLO SI ESTAMOS EN LA PÁGINA DE INICIO */}
        {isHomePage && (
          <div className={styles.searchContainer}>
            <SearchIcon />
            <input
              type="text"
              placeholder="Buscar productos..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        )}

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