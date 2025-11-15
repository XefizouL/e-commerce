// components/ProductCard.js
import Link from 'next/link';
import Image from 'next/image'; // <-- Asegúrate de que Image esté importado
import styles from '../styles/Home.module.css';

const ProductCard = ({ product }) => {
  return (
    <Link href={`/producto/${product.id}`} className={styles.productCard}>
      <div className={styles.imageContainer}>
        {/* --- CÓDIGO ACTUALIZADO AQUÍ --- */}
        <Image 
          src={product.image} 
          alt={product.name} 
          width={400} // Puedes poner un tamaño base
          height={400} // Next.js lo usará para el aspect ratio
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }} // <-- Nueva forma de estilizar
        />
      </div>
      <div className={styles.productInfo}>
        <h3>{product.name}</h3>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;