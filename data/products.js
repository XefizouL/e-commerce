// data/products.js

export const products = [
  {
    id: 1,
    name: "Men's Essential Tee (Port)",
    price: 30.00,
    image: '/images/camisetah.png', // <-- URL NUEVA Y FUNCIONAL
    category: 'mens',
    description: 'Nuestra camiseta esencial, rediseñada para ser aún mejor. Hecha de un tejido de algodón supima suave y duradero, esta camiseta está diseñada para un ajuste perfecto y una comodidad duradera.'
  },
  {
    id: 2,
    name: "Men's Essential Tee (Deep Forest)",
    price: 38.00,
    // URL ANTIGUA Y ROTA: 'https://i.imgur.com/Fw5v5t2.png'
    image: '/images/camisetah1.png', // <-- URL NUEVA Y FUNCIONAL
    category: 'mens',
    description: 'Nuestra camiseta esencial, rediseñada para ser aún mejor. Hecha de un tejido de algodón supima suave y duradero, esta camiseta está diseñada para un ajuste perfecto y una comodidad duradera.'
  },
  {
    id: 3,
    name: "Men's Essential Tee (Bone)",
    price: 30.00,
    // URL ANTIGUA Y ROTA: 'https://i.imgur.com/kE9t2N5.png'
    image: '/images/camisetah2.png', // <-- URL NUEVA Y FUNCIONAL
    category: 'mens',
    description: 'Nuestra camiseta esencial, rediseñada para ser aún mejor. Hecha de un tejido de algodón supima suave y duradero, esta camiseta está diseñada para un ajuste perfecto y una comodidad duradera.'
  },
  {
    id: 4,
    name: "Men's Essential Tee (Charcoal)",
    price: 34.00,
    // URL ANTIGUA Y ROTA: 'https://i.imgur.com/L13s8gA.png'
    image: '/images/camisetah3.png', // <-- URL NUEVA Y FUNCIONAL
    category: 'mens',
    description: 'Nuestra camiseta esencial, rediseñada para ser aún mejor. Hecha de un tejido de algodón supima suave y duradero, esta camiseta está diseñada para un ajuste perfecto y una comodidad duradera.'
  },
  {
    id: 5,
    name: "Women's Essential Tee (Dusty Rose)",
    price: 32.00,
    // URL ANTIGUA Y ROTA: 'https://i.imgur.com/j4s4Ylb.png'
    image: '/images/camisam.png', // <-- URL NUEVA Y FUNCIONAL
    category: 'womens',
    description: 'Diseñada con un corte femenino y elegante, esta camiseta combina estilo y comodidad. Perfecta para cualquier ocasión, desde un día casual hasta una salida nocturna.'
  },
  {
    id: 6,
    name: "Women's Boxy Tee (Natural)",
    price: 35.00,
    // URL ANTIGUA Y ROTA: 'https://i.imgur.com/dJ8q1jG.png'
    image: '/images/camisam1.png', // <-- URL NUEVA Y FUNCIONAL
    category: 'womens',
    description: 'Un corte moderno y relajado. Esta camiseta "boxy" ofrece una silueta contemporánea sin sacrificar la comodidad del algodón premium.'
  },
  {
    id: 7,
    name: "Object: Wooden Coaster Set",
    price: 45.00,
    // URL ANTIGUA Y ROTA: 'https://i.imgur.com/RDTsWb7.png'
    image: '/images/vasos.png', // <-- URL NUEVA Y FUNCIONAL
    category: 'objects',
    description: 'Set de cuatro posavasos de madera de nogal macizo. Cada pieza está hecha a mano para proteger tus superficies con estilo y calidez.'
  },
  {
    id: 8,
    name: "Object: Ceramic Mug",
    price: 25.00,
    // URL ANTIGUA Y ROTA: 'https://i.imgur.com/QhFpQdE.png'
    image: '/images/vasos1.png', // <-- URL NUEVA Y FUNCIONAL
    category: 'objects',
    description: 'Nuestra taza de cerámica minimalista, perfecta para tu café matutino. Su diseño ergonómico y acabado mate la convertirán en tu favorita.'
  }
];

export const categories = ['mens', 'womens', 'objects'];