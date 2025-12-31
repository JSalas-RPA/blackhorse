/**
 * PRODUCTS DATABASE - Base de datos de productos para Black Horse
 * Este archivo contiene todos los productos y puede ser reemplazado
 * por una conexión a base de datos real en el futuro.
 */

export const PRODUCTS_DB = [
    // Monturas
    {
        id: 1,
        name: "Montura Western Pro",
        category: "monturas",
        description: "Montura profesional para trabajo de campo, con estructura reforzada de madera de guayacán y acabado en cuero de primera calidad curtido al vegetal. Incluye estribos de acero inoxidable.",
        price: "$1,200",
        image: "img/monturas/montura.jpeg",
        featured: true,
        tags: ["profesional", "resistente", "campo", "madera guayacán"],
        specifications: {
            material: "Cuero vacuno premium",
            weight: "12.5 kg",
            dimensions: "45 x 35 x 25 cm",
            color: "Marrón oscuro",
            warranty: "2 años"
        }
    },
    {
        id: 2,
        name: "Montura Clásica Ranchera",
        category: "monturas",
        description: "Diseño tradicional con detalles artesanales en piel grabada. Perfecta para exhibiciones y paseos. Acabado envejecido naturalmente.",
        price: "$950",
        image: "img/monturas/clasica-ranchera.jpg",
        featured: true,
        tags: ["tradicional", "artesanal", "exhibición", "grabada"],
        specifications: {
            material: "Cuero de res curtido",
            weight: "11 kg",
            dimensions: "43 x 34 x 24 cm",
            color: "Marrón claro",
            warranty: "18 meses"
        }
    },
    {
        id: 3,
        name: "Montura de Trabajo Liviano",
        category: "monturas",
        description: "Montura funcional para uso diario en el rancho, con máximo confort para jinete y caballo. Diseño ergonómico.",
        price: "$850",
        image: "img/monturas/trabajo.jpg",
        featured: false,
        tags: ["funcional", "confort", "diario", "ergonómico"],
        specifications: {
            material: "Cuero sintético reforzado",
            weight: "9.5 kg",
            dimensions: "42 x 33 x 23 cm",
            color: "Negro",
            warranty: "1 año"
        }
    },
    {
        id: 4,
        name: "Montura para Doma",
        category: "monturas",
        description: "Especialmente diseñada para doma de caballos, con distribución de peso equilibrada.",
        price: "$1,100",
        image: "img/monturas/doma.jpg",
        featured: false,
        tags: ["doma", "equilibrada", "especializada"]
    },
    
    // Mantas
    {
        id: 5,
        name: "Manta de Cuero Piel Oveja",
        category: "mantas",
        description: "Manta suave y cálida con forro de piel de oveja 100% natural, ideal para climas fríos. Impermeable.",
        price: "$320",
        image: "img/mantas/piel-oveja.jpg",
        featured: true,
        tags: ["abrigo", "piel natural", "invierno", "impermeable"],
        specifications: {
            material: "Cuero con forro de piel oveja",
            dimensions: "180 x 150 cm",
            color: "Natural",
            weight: "3.5 kg"
        }
    },
    {
        id: 6,
        name: "Manta Vaquera Tradicional",
        category: "mantas",
        description: "Manta resistente con diseño vaquero tradicional, doble capa de cuero para máxima durabilidad.",
        price: "$280",
        image: "img/mantas/vaquera.jpg",
        featured: false,
        tags: ["vaquero", "resistente", "doble-capa", "tradicional"]
    },
    {
        id: 7,
        name: "Manta de Competencia",
        category: "mantas",
        description: "Manta ligera para competencias ecuestres, con diseño aerodinámico y materiales premium.",
        price: "$350",
        image: "img/mantas/competencia.jpg",
        featured: true,
        tags: ["competencia", "ligera", "premium"]
    },
    
    // Jaquimas
    {
        id: 8,
        name: "Jaquima de Entrenamiento Pro",
        category: "jaquimas",
        description: "Jaquima profesional con sistema de ajuste milimétrico para entrenamiento de caballos. Incluye cabestro acolchado.",
        price: "$180",
        image: "img/jaquimas/entrenamiento.jpg",
        featured: true,
        tags: ["entrenamiento", "ajustable", "profesional", "acolchado"],
        specifications: {
            material: "Cuero y nylon reforzado",
            adjustable: "Sí",
            padding: "Acolchado en puntos de presión"
        }
    },
    {
        id: 9,
        name: "Jaquima de Cuero Natural",
        category: "jaquimas",
        description: "Jaquima artesanal con cuero natural sin teñir, envejecimiento natural garantizado. Hecha a mano.",
        price: "$220",
        image: "img/jaquimas/natural.jpg",
        featured: false,
        tags: ["natural", "artesanal", "envejecido", "hecho a mano"]
    },
    {
        id: 10,
        name: "Jaquima Doble Cabestro",
        category: "jaquimas",
        description: "Jaquima con doble sistema de cabestro para mayor control y seguridad.",
        price: "$250",
        image: "img/jaquimas/doble.jpg",
        featured: false,
        tags: ["doble", "seguridad", "control"]
    },
    
    // Pecheros
    {
        id: 11,
        name: "Pechero de Fuerza Reforzado",
        category: "pecheros",
        description: "Pechero reforzado para trabajos pesados, con distribución uniforme de la carga y protección extra.",
        price: "$450",
        image: "img/pecheros/fuerza.jpg",
        featured: true,
        tags: ["reforzado", "pesado", "carga", "protección"],
        specifications: {
            material: "Cuero industrial",
            maxWeight: "500 kg",
            reinforcedPoints: "8 puntos"
        }
    },
    {
        id: 12,
        name: "Pechero de Montaña",
        category: "pecheros",
        description: "Diseño especial para terreno montañoso, con protección adicional en puntos críticos y agarre antideslizante.",
        price: "$380",
        image: "img/pecheros/montana.jpg",
        featured: false,
        tags: ["montaña", "protección", "especializado", "antideslizante"]
    },
    {
        id: 13,
        name: "Pechero Liviano de Trabajo",
        category: "pecheros",
        description: "Pechero para trabajo diario, diseño ergonómico que no fatiga al animal.",
        price: "$300",
        image: "img/pecheros/liviano.jpg",
        featured: false,
        tags: ["liviano", "ergonómico", "diario"]
    },
    
    // Accesorios
    {
        id: 14,
        name: "Riendas de Cuero Premium",
        category: "accesorios",
        description: "Riendas de cuero curtido al vegetal, con agarre antideslizante y costuras reforzadas.",
        price: "$120",
        image: "img/accesorios/riendas.jpg",
        featured: true,
        tags: ["riendas", "agarre antideslizante", "vegetal", "reforzado"]
    },
    {
        id: 15,
        name: "Estribos Forrados en Cuero",
        category: "accesorios",
        description: "Estribos con forro interno de cuero suave para mayor confort del jinete. Base antideslizante.",
        price: "$95",
        image: "img/accesorios/estribos.jpg",
        featured: false,
        tags: ["estribos", "confort", "forrados", "antideslizante"]
    },
    {
        id: 16,
        name: "Cinchas de Trabajo Reforzadas",
        category: "accesorios",
        description: "Cinchas reforzadas con doble costura y tejido especial, para trabajo intensivo.",
        price: "$75",
        image: "img/accesorios/cinchas.jpg",
        featured: false,
        tags: ["cinchas", "reforzadas", "trabajo", "doble costura"]
    },
    {
        id: 17,
        name: "Freno de Doma Especial",
        category: "accesorios",
        description: "Freno especial para doma, con ajuste fino y materiales de primera calidad.",
        price: "$150",
        image: "img/accesorios/freno.jpg",
        featured: true,
        tags: ["freno", "doma", "ajuste fino", "calidad"]
    },
    {
        id: 18,
        name: "Cabestro de Exhibición",
        category: "accesorios",
        description: "Cabestro decorado para exhibiciones, con detalles en plata y cuero grabado.",
        price: "$200",
        image: "img/accesorios/cabestro.jpg",
        featured: true,
        tags: ["cabestro", "exhibición", "decorado", "grabado"]
    },
    {
        id: 19,
        name: "Protector de Espalda",
        category: "accesorios",
        description: "Protector acolchado para la espalda del caballo, previene rozaduras.",
        price: "$85",
        image: "img/accesorios/protector.jpg",
        featured: false,
        tags: ["protector", "acolchado", "prevención"]
    },
    {
        id: 20,
        name: "Mochila de Cuero para Montar",
        category: "accesorios",
        description: "Mochila práctica para llevar accesorios durante la monta, hecha en cuero resistente.",
        price: "$110",
        image: "img/accesorios/mochila.jpg",
        featured: false,
        tags: ["mochila", "práctica", "resistente"]
    }
];

/**
 * Obtiene productos por categoría
 * @param {string} category - Categoría de productos
 * @returns {Array} Productos filtrados
 */
export function getProductsByCategory(category) {
    if (category === 'all') return PRODUCTS_DB;
    return PRODUCTS_DB.filter(product => product.category === category);
}

/**
 * Obtiene productos destacados
 * @returns {Array} Productos destacados
 */
export function getFeaturedProducts() {
    return PRODUCTS_DB.filter(product => product.featured);
}

/**
 * Busca productos por término
 * @param {string} term - Término de búsqueda
 * @returns {Array} Productos encontrados
 */
export function searchProducts(term) {
    const searchTerm = term.toLowerCase();
    return PRODUCTS_DB.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
}

/**
 * Obtiene producto por ID
 * @param {number} id - ID del producto
 * @returns {Object|null} Producto encontrado o null
 */
export function getProductById(id) {
    return PRODUCTS_DB.find(product => product.id === id) || null;
}

/**
 * Obtiene todas las categorías disponibles
 * @returns {Array} Lista de categorías únicas
 */
export function getAllCategories() {
    const categories = new Set(PRODUCTS_DB.map(product => product.category));
    return Array.from(categories);
}

/**
 * Añade un nuevo producto a la base de datos
 * @param {Object} product - Datos del nuevo producto
 * @returns {Object} Producto añadido con ID
 */
export function addProduct(product) {
    // Generar nuevo ID (en producción esto vendría de la base de datos)
    const newId = Math.max(...PRODUCTS_DB.map(p => p.id)) + 1;
    const newProduct = {
        ...product,
        id: newId,
        featured: product.featured || false
    };
    
    PRODUCTS_DB.push(newProduct);
    return newProduct;
}

/**
 * Actualiza un producto existente
 * @param {number} id - ID del producto a actualizar
 * @param {Object} updates - Campos a actualizar
 * @returns {Object|null} Producto actualizado o null si no existe
 */
export function updateProduct(id, updates) {
    const index = PRODUCTS_DB.findIndex(product => product.id === id);
    if (index === -1) return null;
    
    PRODUCTS_DB[index] = { ...PRODUCTS_DB[index], ...updates };
    return PRODUCTS_DB[index];
}

/**
 * Elimina un producto
 * @param {number} id - ID del producto a eliminar
 * @returns {boolean} True si se eliminó, false si no existe
 */
export function deleteProduct(id) {
    const index = PRODUCTS_DB.findIndex(product => product.id === id);
    if (index === -1) return false;
    
    PRODUCTS_DB.splice(index, 1);
    return true;
}

// Exportar para uso global (opcional)
if (typeof window !== 'undefined') {
    window.PRODUCTS_DB = PRODUCTS_DB;
    window.getProductsByCategory = getProductsByCategory;
    window.getFeaturedProducts = getFeaturedProducts;
    window.getProductById = getProductById;
}