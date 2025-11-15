// pages/producto/[id].js

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { products } from '../../data/products';
import Header from '../../components/Header';
import styles from '../../styles/Producto.module.css';
import { useCart } from '../../context/CartContext';

// Componente de Acordeón
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <button className={styles.accordionHeader} onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      <div className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

// Página principal del producto
const ProductoPage = ({ product, relatedProducts }) => {
  const { addToCart } = useCart();
  const router = useRouter();

  if (!product) return <div>Producto no encontrado.</div>;

  const handleAddToCart = () => {
    addToCart(product);
    router.push('/carrito');
  };

  return (
    <>
      <Head>
        {/* Título corregido con template literal */}
        <title>{`${product.name} - Aramé`}</title>
        <meta name="description" content={product.description} />
      </Head>

      <Header />

      <main className={styles.productDetailContainer}>
        <div className={styles.productColumns}>

          {/* Imagen principal */}
          <div className={styles.imageColumn}>
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
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

            {product.details && (
              <div className={styles.detailsContainer}>
                {product.details.material && (
                  <AccordionItem title="Material" content={product.details.material} />
                )}
                {product.details.fit && (
                  <AccordionItem title="Talla y Ajuste" content={product.details.fit} />
                )}
                {product.details.dimensions && (
                  <AccordionItem title="Dimensiones" content={product.details.dimensions} />
                )}
                {product.details.capacity && (
                  <AccordionItem title="Capacidad" content={product.details.capacity} />
                )}
                {product.details.care && (
                  <AccordionItem title="Cuidados" content={product.details.care} />
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Productos relacionados */}
      <section className={styles.relatedProducts}>
        <h2>Productos Relacionados</h2>

        <div className={styles.relatedGrid}>
          {relatedProducts.map(p => (
            <Link key={p.id} href={`/producto/${p.id}`} className={styles.relatedCard}>
              <Image
                src={p.image}
                alt={p.name}
                width={250}
                height={250}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover'
                }}
              />
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

// Generar paths estáticos
export async function getStaticPaths() {
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

// Obtener props del producto
export async function getStaticProps({ params }) {
  const product = products.find(p => p.id.toString() === params.id);

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return {
    props: { product, relatedProducts },
  };
}
