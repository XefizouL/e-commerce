// components/ProductList.js

import ProductCard from './ProductCard';
import styles from '../styles/Home.module.css';

// 1. AÑADE searchTerm A LAS PROPS
const ProductList = ({ products, category, searchTerm }) => {
  
  // 2. ACTUALIZA LA LÓGICA DE FILTRADO
  const filteredProducts = products
    // Primero, filtra por categoría
    .filter(product => {
      if (category === 'mens') return product.category === 'mens';
      if (category === 'womens') return product.category === 'womens';
      if (category === 'objects') return product.category === 'objects';
      return true; // Si no hay categoría, muestra todos
    })
    // Luego, filtra por el término de búsqueda
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
      {/* 3. MUESTRA UN MENSAJE SI NO HAY RESULTADOS */}
      {filteredProducts.length === 0 ? (
        <div className={styles.noResults}>
          <p>No se encontraron productos que coincidan con tu búsqueda.</p>
        </div>
      ) : (
        <div className={styles.productListGrid}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;