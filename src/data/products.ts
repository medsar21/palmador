// src/data/products.ts
// Système optimisé pour Vercel avec import.meta.glob
export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'coffret' | 'coupe' | 'tablette';
  image: string;
  description: string;
}

// Récupérer toutes les images via glob pour Vercel
const coffrets = import.meta.glob('../assets/products/coffrets/*.{png,jpg,jpeg,webp,avif}', { eager: true, as: 'url' });
const coupes = import.meta.glob('../assets/products/coupes/*.{png,jpg,jpeg,webp,avif}', { eager: true, as: 'url' });
const tablettes = import.meta.glob('../assets/products/tablettes/*.{png,jpg,jpeg,webp,avif}', { eager: true, as: 'url' });

// Fallback images depuis les assets existants
const fallbackImages = import.meta.glob('../assets/*.{png,jpg,jpeg,webp,avif}', { eager: true, as: 'url' });

// Fabrique une liste de produits à partir des fichiers
function mapToProducts(
  files: Record<string, string>,
  category: Product['category'],
  baseIndex: number = 0
): Product[] {
  return Object.entries(files).map(([path, url], index) => {
    const filename = path.split('/').pop() || `item-${index}`;
    const baseName = filename.replace(/\.(png|jpg|jpeg|webp|avif)$/i, '').replace(/[-_]/g, ' ');
    const pretty = baseName.replace(/\b\w/g, c => c.toUpperCase());

    // Prix basés sur la catégorie
    const prices = {
      coffret: [450, 380, 520, 420, 480, 440],
      coupe: [320, 290, 340, 310, 360, 330],
      tablette: [59, 49, 54, 52, 48, 55]
    };

    const descriptions = {
      coffret: [
        "Collection exclusive de chocolats fins artisanaux, créés avec les meilleurs ingrédients pour une expérience gustative inoubliable.",
        "Coffret de chocolats fins aux saveurs raffinées, emballé dans un écrin élégant pour vos moments les plus précieux.",
        "Coffret royal aux chocolats d'exception, créé spécialement pour les occasions les plus importantes de votre vie.",
        "Coffret signature aux chocolats uniques, représentant l'excellence et le savoir-faire artisanal de Palmador.",
        "Coffret d'excellence aux chocolats premium, sélectionnés parmi les meilleures créations artisanales de Palmador.",
        "Coffret prestige aux chocolats noirs intenses, pour les amateurs de saveurs profondes et authentiques."
      ],
      coupe: [
        "Coupe dorée avec chocolats audacieux, mélange parfait entre tradition et innovation pour les palais les plus exigeants.",
        "Coupe d'élégance avec chocolats artisanaux, parfaite pour accompagner vos soirées les plus sophistiquées.",
        "Coupe de délicatesse aux saveurs subtiles, un véritable voyage gustatif pour les amateurs de chocolat raffiné.",
        "Coupe d'harmonie aux saveurs équilibrées, créée pour éveiller tous vos sens avec délicatesse et raffinement.",
        "Coupe de sophistication aux chocolats raffinés, parfaite pour impressionner vos invités les plus distingués.",
        "Coupe de rêve aux chocolats oniriques, créée pour transformer chaque dégustation en moment magique."
      ],
      tablette: [
        "Chocolat noir d'exception aux notes profondes, parfait pour les connaisseurs de cacao pur.",
        "Tablette de chocolat au lait avec éclats de caramel, douceur et gourmandise réunies.",
        "Chocolat noir aux noisettes entières, croquant et onctueux à la fois.",
        "Chocolat noir aux zestes d'orange confits, alliance parfaite entre amertume et acidité.",
        "Tablette de chocolat blanc aux amandes, douceur et délicatesse pour les palais raffinés.",
        "Chocolat noir aux fruits secs, mélange parfait de saveurs et textures."
      ]
    };

    return {
      id: `${category}-${baseIndex + index}`,
      name: pretty,
      price: prices[category][index % prices[category].length],
      category,
      image: url,
      description: descriptions[category][index % descriptions[category].length],
    };
  });
}

// Générer les produits à partir des images disponibles
const coffretProducts = mapToProducts(coffrets, 'coffret', 0);
const coupeProducts = mapToProducts(coupes, 'coupe', coffretProducts.length);
const tabletteProducts = mapToProducts(tablettes, 'tablette', coffretProducts.length + coupeProducts.length);

// Si pas d'images dans les dossiers spécifiques, utiliser les fallbacks
const allProducts = [
  ...coffretProducts,
  ...coupeProducts,
  ...tabletteProducts,
];

// Si aucun produit généré, créer des produits de fallback avec les images existantes
const fallbackProducts: Product[] = allProducts.length === 0 ? [
  {
    id: 'coffret-1',
    name: 'Coffret Prestige',
    price: 450,
    category: 'coffret',
    image: Object.values(fallbackImages)[0] || '/placeholder.svg',
    description: 'Collection exclusive de chocolats fins artisanaux, créés avec les meilleurs ingrédients pour une expérience gustative inoubliable.',
  },
  {
    id: 'coupe-1',
    name: 'Coupe Audace Gold',
    price: 320,
    category: 'coupe',
    image: Object.values(fallbackImages)[1] || '/placeholder.svg',
    description: 'Coupe dorée avec chocolats audacieux, mélange parfait entre tradition et innovation pour les palais les plus exigeants.',
  },
  {
    id: 'coffret-2',
    name: 'Coffret Luxe',
    price: 380,
    category: 'coffret',
    image: Object.values(fallbackImages)[2] || '/placeholder.svg',
    description: 'Coffret de chocolats fins aux saveurs raffinées, emballé dans un écrin élégant pour vos moments les plus précieux.',
  },
  {
    id: 'coupe-2',
    name: 'Coupe Élégance',
    price: 290,
    category: 'coupe',
    image: Object.values(fallbackImages)[3] || '/placeholder.svg',
    description: 'Coupe d\'élégance avec chocolats artisanaux, parfaite pour accompagner vos soirées les plus sophistiquées.',
  },
  {
    id: 'tablette-1',
    name: 'Tablette Intense 70%',
    price: 59,
    category: 'tablette',
    image: Object.values(fallbackImages)[4] || '/placeholder.svg',
    description: 'Chocolat noir d\'exception aux notes profondes, parfait pour les connaisseurs de cacao pur.',
  },
  {
    id: 'tablette-2',
    name: 'Tablette Lait Caramel',
    price: 49,
    category: 'tablette',
    image: Object.values(fallbackImages)[5] || '/placeholder.svg',
    description: 'Tablette de chocolat au lait avec éclats de caramel, douceur et gourmandise réunies.',
  },
] : [];

export const products: Product[] = allProducts.length > 0 ? allProducts : fallbackProducts;