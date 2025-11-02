// pages/index.js

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import styles from '../styles/Home.module.css';

// Importamos nuestros nuevos datos de productos y categorías
import { products, categories } from '../data/products';

export default function Home({ allProducts }) {
  // El estado para la categoría ahora empieza en 'mens' como en el ejemplo
  const [activeCategory, setActiveCategory] = useState('mens');

  return (
    <div className={styles.container}>
      <Head>
        <title>ARAMÉ - Tienda Minimalista</title>
        <meta name="description" content="Ropa y objetos de diseño con un enfoque minimalista." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* El Header ya no necesita saber nada sobre los filtros */}
      <Header />

      <main>
        {/* --- NUEVO HERO BANNER --- */}
        <div className={styles.heroBanner}>
          <Image 
            src="/images/logo.png" // URL de la imagen del banner
            alt="Camisetas colgadas en un perchero"
            layout="fill"
            objectFit="center top"
            quality={100}
            priority // Carga esta imagen primero
          />
          <div className={styles.heroText}>
            <h2>Menos ruido, más aura</h2>
          
          </div>
        </div>

        {/* --- NUEVOS FILTROS DE CATEGORÍA --- */}
        <div className={styles.categoryFilters}>
          {categories.map(category => (
            <button
              key={category}
              className={activeCategory === category ? styles.active : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* --- LISTADO DE PRODUCTOS --- */}
        <div className={styles.productListContainer}>
          <ProductList products={allProducts} category={activeCategory} />
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      allProducts: products,
    },
  };
}