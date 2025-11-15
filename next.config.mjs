// DESPUÉS (LA SOLUCIÓN MODERNA Y CORRECTA)
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    // Esta es la nueva forma, más segura y recomendada
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**', // Permite cualquier ruta dentro de i.imgur.com
      },
    ],
  },
};

export default nextConfig;