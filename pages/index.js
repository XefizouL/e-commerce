// pages/index.js

import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import styles from '../styles/Home.module.css';
import { products, categories } from '../data/products';

export default function Home({ allProducts }) {
  const [activeCategory, setActiveCategory] = useState('mens');

  // 🌿 Estado para búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={styles.container}>
      <Head>
        <title>ARAMÉ - Style & Conscious Design</title>
        <meta name="description" content="Diseño minimalista para una vida consciente." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header transparente + soporte para búsqueda */}
      <Header 
        className="header-overlay"
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <main>
        {/* ------------------ HERO SECTION ------------------ */}
        <section className={styles.heroSection}>
          <div className={styles.heroLogo}>ARAMÉ</div>
          <div className={styles.heroTagline}>STYLE & CONSCIOUS DESIGN</div>
          <div className={styles.heroSubtext}>Menos ruido, más aura</div>
        </section>

        {/* ------------------ FILTROS DE CATEGORÍA ------------------ */}
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

        {/* ------------------ LISTADO DE PRODUCTOS ------------------ */}
        <div className={styles.productListContainer}>
          <ProductList
            products={allProducts}
            category={activeCategory}
            searchTerm={searchTerm}
          />
        </div>
      </main>
    </div>
  )
}

// -------- Static Props --------
export async function getStaticProps() {
  return {
    props: {
      allProducts: products,
    },
  };
}
