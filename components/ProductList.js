import ProductCard from './ProductCard';
import styles from '../styles/Home.module.css';

const ProductList = ({ products, category }) => {
  // Filtra los productos. Si la categoría es 'todos', los muestra todos.
  const filteredProducts =
    category === 'todos'
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className={styles.productListGrid}>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
