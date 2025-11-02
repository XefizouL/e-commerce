// pages/_app.js

import '../styles/globals.css'
import { CartProvider } from '../context/CartContext'; // Importamos nuestro proveedor

function MyApp({ Component, pageProps }) {
  return (
    // Envolvemos toda la aplicación
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp