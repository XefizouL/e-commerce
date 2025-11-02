// pages/producto/[id].js

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { products } from '../../data/products';
import Header from '../../components/Header';
import styles from '../../styles/Producto.module.css';
import { useCart } from '../../context/CartContext';

const ProductoPage = ({ product, relatedProducts }) => {
  const { addToCart } = useCart();
  const router = useRouter();

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    router.push('/carrito');
  };

  return (
    <>
      <Head>
        <title>{product.name} - ARAMÉ Clone</title>
        <meta name="description" content={product.description} />
      </Head>

      <Header />

      <main className={styles.productDetailContainer}>
        <div className={styles.productColumns}>
          <div className={styles.imageColumn}>
            <Image src={product.image} alt={product.name} width={600} height={600} layout="responsive" objectFit="contain" />
          </div>

          <div className={styles.infoColumn}>
            <h1>{product.name}</h1>
            <p className={styles.price}>${product.price.toFixed(2)}</p>
            <p className={styles.description}>{product.description}</p>
            
            <div className={styles.purchaseButtons}>
              <button className={styles.addToCartButton} onClick={handleAddToCart}>
                Añadir a la cesta
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* --- SECCIÓN DE PRODUCTOS RELACIONADOS (SIN CAMBIOS) --- */}
      <section className={styles.relatedProducts}>
        <h2>Productos Relacionados</h2>
        <div className={styles.relatedGrid}>
          {relatedProducts.map(p => (
            <Link key={p.id} href={`/producto/${p.id}`} className={styles.relatedCard}>
              <Image src={p.image} alt={p.name} width={250} height={250} objectFit="cover" />
              <h3>{p.name}</h3>
              <p className={styles.price}>${p.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductoPage;


// ----- VERSIÓN CORRECTA Y ÚNICA DE LAS FUNCIONES -----

// 1. Next.js necesita saber qué rutas dinámicas existen
export async function getStaticPaths() {
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

// 2. Para cada página, obtenemos los datos específicos de ese producto
export async function getStaticProps({ params }) {
  const product = products.find(p => p.id.toString() === params.id);
  
  // Filtramos para encontrar productos relacionados
  const relatedProducts = products.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4); // Mostramos hasta 4 relacionados

  return {
    props: {
      product,
      relatedProducts,
    },
  };
}