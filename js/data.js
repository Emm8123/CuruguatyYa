// Datos iniciales de CuruguatyYa - Restaurantes reales/inspirados de Curuguaty, Paraguay

const INITIAL_RESTAURANTS = [
  {
    id: 'rest_1',
    name: "Asado's.com",
    ownerEmail: 'rest@demo.com',
    address: 'Avda. Eusebio Ayala esq. Gral. Artigas, Curuguaty',
    category: ['asado', 'tipica'],
    rating: 4.6,
    reviewCount: 128,
    deliveryTime: '35-50 min',
    deliveryFee: 8000,
    image: '🥩',
    description: 'Los mejores asados de Curuguaty. Carne a la parrilla, costillas y más.',
    isOpen: true,
    menu: [
      { id: 'm1', name: 'Asado de tira', description: 'Porción generosa de asado de tira a la parrilla', price: 45000, category: 'plato' },
      { id: 'm2', name: 'Costilla BBQ', description: 'Costilla bañada en salsa barbecue casera', price: 52000, category: 'plato' },
      { id: 'm3', name: 'Choripán', description: 'Chorizo parrillero en pan francés con chimichurri', price: 18000, category: 'plato' },
      { id: 'm4', name: 'Ensalada mixta', description: 'Lechuga, tomate, cebolla y zanahoria', price: 12000, category: 'entrada' },
      { id: 'm5', name: 'Coca-Cola 500ml', description: 'Bebida helada', price: 7000, category: 'bebida' },
      { id: 'm6', name: 'Combo Asador', description: 'Asado + ensalada + bebida', price: 58000, category: 'combo' }
    ]
  },
  {
    id: 'rest_2',
    name: 'Empanada Raity',
    ownerEmail: null,
    address: 'Centro, Curuguaty',
    category: ['empanada', 'rapida'],
    rating: 4.8,
    reviewCount: 95,
    deliveryTime: '20-35 min',
    deliveryFee: 7000,
    image: '🥟',
    description: 'Las empanadas más ricas de la zona. Variedad de rellenos.',
    isOpen: true,
    menu: [
      { id: 'm7', name: 'Empanada de carne', description: 'Carne molida sazonada estilo paraguayo', price: 5000, category: 'plato' },
      { id: 'm8', name: 'Empanada de pollo', description: 'Pollo desmenuzado con vegetales', price: 5000, category: 'plato' },
      { id: 'm9', name: 'Empanada de queso', description: 'Queso cremoso derretido', price: 4500, category: 'plato' },
      { id: 'm10', name: 'Empanada de jamón y queso', description: 'Clásico jamón y queso', price: 5500, category: 'plato' },
      { id: 'm11', name: 'Docena mixta', description: '12 empanadas variadas a elección', price: 52000, category: 'combo' },
      { id: 'm12', name: 'Jugo natural', description: 'Naranja o mandarina', price: 8000, category: 'bebida' }
    ]
  },
  {
    id: 'rest_3',
    name: 'El Garage de la Pizza',
    ownerEmail: null,
    address: 'Curuguaty 140302',
    category: ['pizza'],
    rating: 4.4,
    reviewCount: 67,
    deliveryTime: '30-45 min',
    deliveryFee: 8000,
    image: '🍕',
    description: 'Pizzas al horno de leña. Masa artesanal y ingredientes frescos.',
    isOpen: true,
    menu: [
      { id: 'm13', name: 'Pizza Muzzarella', description: 'Clásica con abundante queso', price: 38000, category: 'plato' },
      { id: 'm14', name: 'Pizza Napolitana', description: 'Tomate, ajo, albahaca y muzzarella', price: 42000, category: 'plato' },
      { id: 'm15', name: 'Pizza Especial', description: 'Jamón, morrón, huevo y aceitunas', price: 48000, category: 'plato' },
      { id: 'm16', name: 'Pizza Familiar', description: 'Grande para compartir (8 porciones)', price: 65000, category: 'plato' },
      { id: 'm17', name: 'Coca-Cola 1.5L', description: 'Familiar', price: 12000, category: 'bebida' }
    ]
  },
  {
    id: 'rest_4',
    name: "Cheto's Burger",
    ownerEmail: null,
    address: 'Curuguaty centro',
    category: ['hamburguesa', 'rapida'],
    rating: 4.5,
    reviewCount: 112,
    deliveryTime: '25-40 min',
    deliveryFee: 7000,
    image: '🍔',
    description: 'Hamburguesas gourmet y clásicas. Papas fritas caseras.',
    isOpen: true,
    menu: [
      { id: 'm18', name: 'Hamburguesa Clásica', description: 'Carne, lechuga, tomate, cebolla y salsa', price: 28000, category: 'plato' },
      { id: 'm19', name: 'Hamburguesa Doble', description: 'Doble carne, doble queso', price: 38000, category: 'plato' },
      { id: 'm20', name: 'Cheto Burger', description: 'Carne, bacon, cheddar, cebolla caramelizada', price: 35000, category: 'plato' },
      { id: 'm21', name: 'Papas fritas', description: 'Porción generosa', price: 12000, category: 'entrada' },
      { id: 'm22', name: 'Combo Burger + Papas + Bebida', description: 'La combinación perfecta', price: 42000, category: 'combo' }
    ]
  },
  {
    id: 'rest_5',
    name: 'Hotel y Restaurant Super Tigre',
    ownerEmail: null,
    address: 'Curuguaty',
    category: ['tipica', 'asado'],
    rating: 4.3,
    reviewCount: 89,
    deliveryTime: '40-55 min',
    deliveryFee: 9000,
    image: '🍽️',
    description: 'Buffet y platos típicos paraguayos. Ideal para almuerzo.',
    isOpen: true,
    menu: [
      { id: 'm23', name: 'Sopa Paraguaya', description: 'Clásica porción generosa', price: 15000, category: 'plato' },
      { id: 'm24', name: 'Chipa Guazú', description: 'Tarta de choclo tradicional', price: 18000, category: 'plato' },
      { id: 'm25', name: 'Vori Vori', description: 'Sopa de bolitas de maíz con pollo', price: 22000, category: 'plato' },
      { id: 'm26', name: 'Bife a caballo', description: 'Bife con huevo frito y papas', price: 35000, category: 'plato' },
      { id: 'm27', name: 'Mbejú', description: 'Torta de almidón de mandioca', price: 10000, category: 'entrada' },
      { id: 'm28', name: 'Terere (porción)', description: 'Yerba fresca lista', price: 8000, category: 'bebida' }
    ]
  },
  {
    id: 'rest_6',
    name: 'Churrasqueria Gaucha',
    ownerEmail: null,
    address: 'Eusebio Ayala, Curuguaty',
    category: ['asado'],
    rating: 4.7,
    reviewCount: 74,
    deliveryTime: '35-50 min',
    deliveryFee: 8000,
    image: '🔥',
    description: 'Especialistas en churrasco estilo gaucho.',
    isOpen: true,
    menu: [
      { id: 'm29', name: 'Picanha', description: 'Corte premium a la parrilla', price: 55000, category: 'plato' },
      { id: 'm30', name: 'Parrillada individual', description: 'Mix de carnes para uno', price: 60000, category: 'plato' },
      { id: 'm31', name: 'Morcilla', description: 'Morcilla parrillera', price: 15000, category: 'entrada' },
      { id: 'm32', name: 'Provoleta', description: 'Queso provolone a la parrilla', price: 18000, category: 'entrada' },
      { id: 'm33', name: 'Cerveza artesanal', description: 'Cerveza local 500ml', price: 12000, category: 'bebida' }
    ]
  },
  {
    id: 'rest_7',
    name: 'Mi Gustó',
    ownerEmail: null,
    address: 'Curuguaty',
    category: ['rapida', 'hamburguesa'],
    rating: 4.2,
    reviewCount: 53,
    deliveryTime: '25-40 min',
    deliveryFee: 7000,
    image: '🌮',
    description: 'Comida rápida y platos caseros al gusto.',
    isOpen: true,
    menu: [
      { id: 'm34', name: 'Lomito completo', description: 'Lomo, lechuga, tomate, huevo, jamón y queso', price: 30000, category: 'plato' },
      { id: 'm35', name: 'Milanesa napolitana', description: 'Con salsa y muzzarella', price: 32000, category: 'plato' },
      { id: 'm36', name: 'Ensalada César', description: 'Con pollo grillado', price: 25000, category: 'plato' },
      { id: 'm37', name: 'Agua mineral', description: '500ml', price: 5000, category: 'bebida' }
    ]
  },
  {
    id: 'rest_8',
    name: 'Pin Pan Crush',
    ownerEmail: null,
    address: 'Mariscal Estigarribia esq., Curuguaty',
    category: ['rapida'],
    rating: 4.1,
    reviewCount: 41,
    deliveryTime: '20-35 min',
    deliveryFee: 6000,
    image: '🥪',
    description: 'Sandwiches, panuchos y snacks rápidos.',
    isOpen: true,
    menu: [
      { id: 'm38', name: 'Sandwich de milanesa', description: 'En pan francés', price: 22000, category: 'plato' },
      { id: 'm39', name: 'Panucho de pollo', description: 'Tortilla con pollo y vegetales', price: 18000, category: 'plato' },
      { id: 'm40', name: 'Jugo de frutilla', description: 'Natural', price: 9000, category: 'bebida' },
      { id: 'm41', name: 'Combo snack', description: 'Sandwich + jugo', price: 28000, category: 'combo' }
    ]
  }
];

const INITIAL_USERS = [
  {
    id: 'user_cliente',
    name: 'Juan Pérez',
    email: 'cliente@demo.com',
    phone: '0981 111 111',
    password: '123456',
    role: 'cliente',
    address: 'Barrio Centro, Curuguaty',
    favorites: ['rest_1', 'rest_2'],
    addresses: ['Barrio Centro, Curuguaty', 'Avda. Eusebio Ayala 123']
  },
  {
    id: 'user_rest',
    name: 'Carlos Asador',
    email: 'rest@demo.com',
    phone: '0981 222 222',
    password: '123456',
    role: 'restaurante',
    restaurantId: 'rest_1'
  },
  {
    id: 'user_delivery',
    name: 'Miguel Repartidor',
    email: 'delivery@demo.com',
    phone: '0981 333 333',
    password: '123456',
    role: 'delivery',
    vehicle: 'moto',
    isOnline: true
  },
  {
    id: 'user_delivery2',
    name: 'Ana Motoquera',
    email: 'ana@delivery.com',
    phone: '0981 444 444',
    password: '123456',
    role: 'delivery',
    vehicle: 'moto',
    isOnline: true
  },
  {
    id: 'user_delivery3',
    name: 'Luis Bici',
    email: 'luis@delivery.com',
    phone: '0981 555 555',
    password: '123456',
    role: 'delivery',
    vehicle: 'bicicleta',
    isOnline: false
  }
];

// Reseñas de ejemplo (algunas buenas, algunas "puteadas")
const INITIAL_REVIEWS = [
  {
    id: 'rev_1',
    orderId: null,
    restaurantId: 'rest_1',
    userId: 'user_cliente',
    userName: 'María G.',
    rating: 5,
    deliveryRating: 5,
    comment: 'Excelente el asado, llegó calentito y a tiempo. Muy recomendable!',
    createdAt: '2026-10-15T20:30:00'
  },
  {
    id: 'rev_2',
    orderId: null,
    restaurantId: 'rest_1',
    userId: 'u2',
    userName: 'Carlos R.',
    rating: 4,
    deliveryRating: 4,
    comment: 'Muy rico, aunque el choripán venía un poco frío.',
    createdAt: '2026-10-14T19:15:00'
  },
  {
    id: 'rev_3',
    orderId: null,
    restaurantId: 'rest_2',
    userId: 'u3',
    userName: 'Lucía M.',
    rating: 5,
    deliveryRating: 5,
    comment: 'Las mejores empanadas de Curuguaty, sin duda.',
    createdAt: '2026-10-16T13:00:00'
  },
  {
    id: 'rev_4',
    orderId: null,
    restaurantId: 'rest_4',
    userId: 'u4',
    userName: 'Pedro S.',
    rating: 2,
    deliveryRating: 3,
    comment: 'La hamburguesa llegó fría y las papas estaban empapadas. No vuelvo a pedir.',
    createdAt: '2026-10-12T21:45:00'
  },
  {
    id: 'rev_5',
    orderId: null,
    restaurantId: 'rest_3',
    userId: 'u5',
    userName: 'Ana L.',
    rating: 5,
    deliveryRating: 4,
    comment: 'Pizza riquísima, masa perfecta. El delivery demoró un poquito pero valió la pena.',
    createdAt: '2026-10-17T20:00:00'
  },
  {
    id: 'rev_6',
    orderId: null,
    restaurantId: 'rest_6',
    userId: 'u6',
    userName: 'Roberto F.',
    rating: 1,
    deliveryRating: 2,
    comment: 'Pedí picanha y me mandaron un corte cualquiera. Muy decepcionante. No recomiendo.',
    createdAt: '2026-10-10T22:10:00'
  },
  {
    id: 'rev_7',
    orderId: null,
    restaurantId: 'rest_5',
    userId: 'u7',
    userName: 'Sofía P.',
    rating: 4,
    deliveryRating: 5,
    comment: 'La sopa paraguaya está buenísima, como la de mi abuela.',
    createdAt: '2026-10-18T12:30:00'
  },
  {
    id: 'rev_8',
    orderId: null,
    restaurantId: 'rest_2',
    userId: 'u8',
    userName: 'Diego V.',
    rating: 3,
    deliveryRating: 1,
    comment: 'Las empanadas bien, pero el repartidor fue un desastre. Llegó tarde y de mal humor.',
    createdAt: '2026-10-11T19:50:00'
  }
];
