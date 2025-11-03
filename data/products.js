// data/products.js

export const products = [
  {
    id: 1,
    name: "Men's Essential Tee (Port)",
    price: 30.00,
    image: '/images/camisetah.png',
    category: 'mens',
    description: 'Nuestra camiseta esencial, rediseñada para ser aún mejor. Hecha de un tejido de algodón supima suave y duradero, esta camiseta está diseñada para un ajuste perfecto y una comodidad duradera.',
    // --- NUEVOS DETALLES ---
    details: {
      material: '100% Algodón Supima de fibra larga',
      fit: 'Corte clásico unisex. Fiel a la talla.',
      care: 'Lavar a máquina en frío, con colores similares. Secar en secadora a baja temperatura.'
    }
  },
  {
    id: 2,
    name: "Men's Essential Tee (Deep Forest)",
    price: 38.00,
    image: '/images/camisetah1.png',
    category: 'mens',
    description: 'Nuestra camiseta esencial, rediseñada para ser aún mejor. Hecha de un tejido de algodón supima suave y duradero, esta camiseta está diseñada para un ajuste perfecto y una comodidad duradera.',
    // --- NUEVOS DETALLES ---
    details: {
      material: '100% Algodón Supima de fibra larga',
      fit: 'Corte clásico unisex. Fiel a la talla.',
      care: 'Lavar a máquina en frío. Secar en secadora a baja temperatura.'
    }
  },
  {
    id: 3,
    name: "Men's Essential Tee (Bone)",
    price: 30.00,
    image: '/images/camisetah2.png',
    category: 'mens',
    description: 'Nuestra camiseta esencial, rediseñada para ser aún mejor. Hecha de un tejido de algodón supima suave y duradero, esta camiseta está diseñada para un ajuste perfecto y una comodidad duradera.',
    // --- NUEVOS DETALLES ---
    details: {
      material: '100% Algodón Supima de fibra larga',
      fit: 'Corte clásico unisex. Fiel a la talla.',
      care: 'Lavar a máquina en frío. Secar en secadora a baja temperatura.'
    }
  },
  {
    id: 4,
    name: "Men's Essential Tee (Charcoal)",
    price: 34.00,
    image: '/images/camisetah3.png',
    category: 'mens',
    description: 'Nuestra camiseta esencial, rediseñada para ser aún mejor. Hecha de un tejido de algodón supima suave y duradero, esta camiseta está diseñada para un ajuste perfecto y una comodidad duradera.',
    // --- NUEVOS DETALLES ---
    details: {
      material: 'Mezcla de Algodón (60%) y Poliéster (40%)',
      fit: 'Corte atlético. Considera una talla más si prefieres un ajuste holgado.',
      care: 'Lavar a máquina en frío. Secar en secadora a baja temperatura.'
    }
  },
  {
    id: 5,
    name: "Women's Essential Tee (Dusty Rose)",
    price: 32.00,
    image: '/images/camisam.png',
    category: 'womens',
    description: 'Diseñada con un corte femenino y elegante, esta camiseta combina estilo y comodidad. Perfecta para cualquier ocasión, desde un día casual hasta una salida nocturna.',
    // --- NUEVOS DETALLES ---
    details: {
      material: '95% Algodón Pima, 5% Spandex para mayor elasticidad.',
      fit: 'Corte entallado femenino. Sigue la guía de tallas.',
      care: 'Lavar a máquina en frío. Colgar para secar para mantener la forma.'
    }
  },
  {
    id: 6,
    name: "Women's Boxy Tee (Natural)",
    price: 35.00,
    image: '/images/camisam1.png',
    category: 'womens',
    description: 'Un corte moderno y relajado. Esta camiseta "boxy" ofrece una silueta contemporánea sin sacrificar la comodidad del algodón premium.',
    // --- NUEVOS DETALLES ---
    details: {
      material: '100% Algodón orgánico de peso medio.',
      fit: 'Corte holgado y cuadrado ("boxy"). Mangas ligeramente caídas.',
      care: 'Lavar a máquina en frío. Secar en secadora a baja temperatura.'
    }
  },
  {
    id: 7,
    name: "Object: Wooden Coaster Set",
    price: 45.00,
    image: '/images/vasos.png',
    category: 'objects',
    description: 'Set de cuatro posavasos de madera de nogal macizo. Cada pieza está hecha a mano para proteger tus superficies con estilo y calidez.',
    // --- NUEVOS DETALLES ---
    details: {
      material: 'Madera de Nogal Americano macizo con acabado de aceite mineral.',
      dimensions: '10cm de diámetro, 1cm de grosor.',
      care: 'Limpiar con un paño húmedo. No sumergir en agua. Aplicar aceite mineral periódicamente.'
    }
  },
  {
    id: 8,
    name: "Object: Ceramic Mug",
    price: 25.00,
    image: '/images/vasos1.png',
    category: 'objects',
    description: 'Nuestra taza de cerámica minimalista, perfecta para tu café matutino. Su diseño ergonómico y acabado mate la convertirán en tu favorita.',
    // --- NUEVOS DETALLES ---
    details: {
      material: 'Cerámica de gres con esmalte mate apto para alimentos.',
      capacity: '12 oz / 355 ml.',
      care: 'Apta para lavavajillas y microondas.'
    }
  }
];

export const categories = ['mens', 'womens', 'objects'];