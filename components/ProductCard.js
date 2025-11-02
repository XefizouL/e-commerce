import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const ProductCard = ({ product }) => {
  return (
    /* ----- CORRECCIÓN AQUÍ ----- */
    /* Se quita la <a> de adentro y la propiedad `passHref`. */
    /* El className se pasa directamente al componente <Link>. */
    <Link href={`/producto/${product.id}`} className={styles.productCard}>
      <div className={styles.imageContainer}>
        <Image src={product.image} alt={product.name} layout="responsive" width={300} height={300} objectFit="cover" />
      </div>
      <div className={styles.productInfo}>
        <h3>{product.name}</h3>
        <p className={styles.price}>${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;