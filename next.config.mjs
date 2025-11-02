/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    domains: ['i.imgur.com'],
  },
};

// ----- CORRECCIÓN AQUÍ -----
// Cambiamos 'module.exports = nextConfig' por 'export default nextConfig'
export default nextConfig;