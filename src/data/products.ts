/**
 * PRODUCT INFORMATION DATABASE
 * ============================
 * 
 * INSTRUCTIONS FOR AGENTS:
 * 1. This file contains all product information for the SmileSpa Wellness website
 * 2. When updating product information, modify the data structures below
 * 3. Use the helper functions at the bottom to retrieve product data
 * 4. Always maintain the TypeScript interfaces - add new properties as needed
 * 5. Product IDs should be unique and descriptive (kebab-case)
 * 6. Categories should match the existing folder structure in /products/
 * 7. Images should reference files in /public/pics/products/
 * 
 * USAGE EXAMPLES:
 * - getProductById('protein-shake-vanilla') - Get specific product
 * - getProductsByCategory('ready-to-drink') - Get all products in category
 * - getAllProducts() - Get all products
 * - searchProducts('protein') - Search products by name/description
 * 
 * CATEGORIES:
 * - weight-management: Weight loss and metabolic health solutions
 * - oral-peptides: Advanced peptide formulations for wellness
 * - fitness-performance: Athletic performance and recovery optimization
 * - health-anti-aging: Longevity, vitality, and age-defying health
 * - tissue-repair-recovery: Advanced healing solutions for injuries
 * - organ-system-support: Comprehensive support for optimal organ function
 */

// Product interfaces
export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  currency: string;
  images: {
    main: string;
    gallery?: string[];
    thumbnail?: string;
  };
  nutrition: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
    fiber?: number;
    sugar?: number;
    sodium?: number;
    servingSize?: string;
  };
  ingredients: string[];
  benefits: string[];
  allergens: string[];
  tags: string[];
  inStock: boolean;
  featured: boolean;
  rating?: number;
  reviewCount?: number;
  variants?: ProductVariant[];
  relatedProducts?: string[];
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
  attributes?: Record<string, string>;
}

// Product database
export const products: Product[] = [
  // WEIGHT MANAGEMENT PRODUCTS
  {
    id: '5-amino-1mq',
    name: '5-AMINO-1MQ',
    category: 'weight-management',
    subcategory: 'fat-loss',
    description: 'Advanced fat loss peptide that targets stubborn fat deposits and enhances metabolic function for sustainable weight management.',
    shortDescription: 'Advanced fat loss peptide for metabolic enhancement',
    price: 199.99,
    currency: 'USD',
    images: {
      main: '/pics/products/box.png',
      thumbnail: '/pics/products/box.png'
    },
    nutrition: {
      servingSize: '1 vial (5mg)'
    },
    ingredients: ['5-AMINO-1MQ Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Targets stubborn fat deposits',
      'Enhances metabolic function',
      'Supports sustainable weight loss',
      'Improves body composition'
    ],
    allergens: [],
    tags: ['fat-loss', 'metabolism', 'weight-management', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 45
  },

  {
    id: 'aod-9604',
    name: 'AOD-9604',
    category: 'weight-management',
    subcategory: 'fat-loss',
    description: 'Revolutionary fat loss peptide that specifically targets fat cells while preserving lean muscle mass.',
    shortDescription: 'Fat-targeting peptide that preserves muscle mass',
    price: 179.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2mg)'
    },
    ingredients: ['AOD-9604 Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Targets fat cells specifically',
      'Preserves lean muscle mass',
      'Enhances fat burning',
      'Supports body recomposition'
    ],
    allergens: [],
    tags: ['fat-loss', 'muscle-preservation', 'body-recomposition', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewCount: 38
  },

  {
    id: 'cagrilintide',
    name: 'CAGRILINTIDE',
    category: 'weight-management',
    subcategory: 'fat-loss',
    description: 'Next-generation appetite suppression peptide that helps control hunger and supports significant weight loss.',
    shortDescription: 'Advanced appetite suppression for weight loss',
    price: 299.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2.4mg)'
    },
    ingredients: ['Cagrilintide Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Suppresses appetite effectively',
      'Supports significant weight loss',
      'Reduces food cravings',
      'Long-lasting effects'
    ],
    allergens: [],
    tags: ['appetite-suppression', 'weight-loss', 'hunger-control', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 52
  },

  {
    id: 'glp-1-sema',
    name: 'GLP-1 SEMA',
    category: 'weight-management',
    subcategory: 'fat-loss',
    description: 'Semaglutide peptide for effective weight management and blood sugar control.',
    shortDescription: 'Semaglutide for weight management and blood sugar control',
    price: 249.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2.5mg)'
    },
    ingredients: ['Semaglutide Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Effective weight management',
      'Blood sugar control',
      'Appetite regulation',
      'Metabolic improvement'
    ],
    allergens: [],
    tags: ['semaglutide', 'weight-management', 'blood-sugar', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 67
  },

  {
    id: 'glp-1-tirz',
    name: 'GLP-1 TIRZ',
    category: 'weight-management',
    subcategory: 'fat-loss',
    description: 'Tirzepatide peptide offering superior weight loss results and metabolic benefits.',
    shortDescription: 'Tirzepatide for superior weight loss and metabolic benefits',
    price: 279.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (5mg)'
    },
    ingredients: ['Tirzepatide Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Superior weight loss results',
      'Enhanced metabolic benefits',
      'Improved insulin sensitivity',
      'Long-term weight management'
    ],
    allergens: [],
    tags: ['tirzepatide', 'weight-loss', 'metabolic', 'insulin-sensitivity', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 41
  },

  {
    id: 'slu-pp-332',
    name: 'SLU-PP-332',
    category: 'weight-management',
    subcategory: 'fat-loss',
    description: 'Novel fat loss peptide that enhances metabolic rate and promotes efficient fat burning.',
    shortDescription: 'Metabolic enhancer for efficient fat burning',
    price: 189.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2mg)'
    },
    ingredients: ['SLU-PP-332 Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Enhances metabolic rate',
      'Promotes efficient fat burning',
      'Supports weight loss',
      'Improves energy levels'
    ],
    allergens: [],
    tags: ['metabolic-enhancer', 'fat-burning', 'weight-loss', 'energy', 'peptide'],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewCount: 23
  },

  {
    id: 'tesamorelin',
    name: 'TESAMORELIN',
    category: 'weight-management',
    subcategory: 'fat-loss',
    description: 'Growth hormone releasing peptide that specifically targets abdominal fat reduction.',
    shortDescription: 'Targets abdominal fat reduction through growth hormone release',
    price: 219.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2mg)'
    },
    ingredients: ['Tesamorelin Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Targets abdominal fat specifically',
      'Enhances growth hormone release',
      'Improves body composition',
      'Supports lean muscle mass'
    ],
    allergens: [],
    tags: ['abdominal-fat', 'growth-hormone', 'body-composition', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewCount: 34
  },

  {
    id: 'tesofensine',
    name: 'TESOFENSINE',
    category: 'weight-management',
    subcategory: 'fat-loss',
    description: 'Triple reuptake inhibitor that enhances weight loss through multiple neurotransmitter pathways.',
    shortDescription: 'Triple reuptake inhibitor for enhanced weight loss',
    price: 199.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (1mg)'
    },
    ingredients: ['Tesofensine', 'Bacteriostatic Water'],
    benefits: [
      'Triple neurotransmitter action',
      'Enhanced weight loss',
      'Appetite suppression',
      'Improved mood and energy'
    ],
    allergens: [],
    tags: ['neurotransmitter', 'weight-loss', 'appetite-suppression', 'mood', 'peptide'],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviewCount: 19
  },

  // FITNESS & PERFORMANCE PRODUCTS
  {
    id: 'cjc-1295',
    name: 'CJC-1295',
    category: 'fitness-performance',
    subcategory: 'muscle-gain-performance',
    description: 'Growth hormone releasing peptide that enhances muscle growth, recovery, and performance.',
    shortDescription: 'Growth hormone releasing peptide for muscle growth and performance',
    price: 159.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2mg)'
    },
    ingredients: ['CJC-1295 Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Enhances muscle growth',
      'Improves recovery time',
      'Increases strength and performance',
      'Supports lean body mass'
    ],
    allergens: [],
    tags: ['muscle-growth', 'recovery', 'performance', 'strength', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 56
  },

  {
    id: 'follistatin-344',
    name: 'FOLLISTATIN-344',
    category: 'fitness-performance',
    subcategory: 'muscle-gain-performance',
    description: 'Myostatin inhibitor that promotes significant muscle growth and strength gains.',
    shortDescription: 'Myostatin inhibitor for significant muscle growth',
    price: 249.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (1mg)'
    },
    ingredients: ['Follistatin-344 Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Inhibits myostatin activity',
      'Promotes significant muscle growth',
      'Enhances strength gains',
      'Improves muscle quality'
    ],
    allergens: [],
    tags: ['myostatin-inhibitor', 'muscle-growth', 'strength', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 43
  },

  {
    id: 'igf-1-lr3',
    name: 'IGF-1 LR3',
    category: 'fitness-performance',
    subcategory: 'muscle-gain-performance',
    description: 'Long-acting insulin-like growth factor that promotes muscle growth and recovery.',
    shortDescription: 'Long-acting growth factor for muscle growth and recovery',
    price: 199.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (1mg)'
    },
    ingredients: ['IGF-1 LR3 Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Promotes muscle growth',
      'Enhances recovery',
      'Improves nutrient uptake',
      'Supports tissue repair'
    ],
    allergens: [],
    tags: ['igf-1', 'muscle-growth', 'recovery', 'nutrient-uptake', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewCount: 38
  },

  {
    id: 'ipamorelin',
    name: 'IPAMORELIN',
    category: 'fitness-performance',
    subcategory: 'muscle-gain-performance',
    description: 'Selective growth hormone releasing peptide that enhances muscle growth and recovery.',
    shortDescription: 'Selective growth hormone releasing peptide',
    price: 139.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2mg)'
    },
    ingredients: ['Ipamorelin Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Selective growth hormone release',
      'Enhances muscle growth',
      'Improves recovery',
      'Minimal side effects'
    ],
    allergens: [],
    tags: ['growth-hormone', 'muscle-growth', 'recovery', 'selective', 'peptide'],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewCount: 29
  },

  {
    id: 'mgf',
    name: 'MGF',
    category: 'fitness-performance',
    subcategory: 'muscle-gain-performance',
    description: 'Mechano Growth Factor that promotes muscle growth and repair at the cellular level.',
    shortDescription: 'Mechano Growth Factor for cellular muscle growth and repair',
    price: 179.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2mg)'
    },
    ingredients: ['MGF Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Promotes cellular muscle growth',
      'Enhances muscle repair',
      'Improves muscle quality',
      'Supports tissue regeneration'
    ],
    allergens: [],
    tags: ['mechano-growth-factor', 'cellular-growth', 'muscle-repair', 'peptide'],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviewCount: 22
  },

  // TISSUE REPAIR & RECOVERY PRODUCTS
  {
    id: 'bpc-157',
    name: 'BPC-157',
    category: 'tissue-repair-recovery',
    subcategory: 'recovery-injury-repair',
    description: 'Body Protection Compound that accelerates healing and recovery from injuries.',
    shortDescription: 'Body Protection Compound for accelerated healing and recovery',
    price: 89.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (5mg)'
    },
    ingredients: ['BPC-157 Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Accelerates healing process',
      'Reduces inflammation',
      'Supports tissue repair',
      'Enhances recovery from injuries'
    ],
    allergens: [],
    tags: ['healing', 'recovery', 'inflammation', 'tissue-repair', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 78
  },

  {
    id: 'kpv',
    name: 'KPV',
    category: 'tissue-repair-recovery',
    subcategory: 'recovery-injury-repair',
    description: 'Anti-inflammatory peptide that supports recovery and reduces inflammation.',
    shortDescription: 'Anti-inflammatory peptide for recovery support',
    price: 79.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2mg)'
    },
    ingredients: ['KPV Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Reduces inflammation',
      'Supports recovery',
      'Anti-inflammatory properties',
      'Enhances healing process'
    ],
    allergens: [],
    tags: ['anti-inflammatory', 'recovery', 'healing', 'peptide'],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviewCount: 31
  },

  {
    id: 'ss-31',
    name: 'SS-31',
    category: 'tissue-repair-recovery',
    subcategory: 'recovery-injury-repair',
    description: 'Mitochondrial protective peptide that enhances cellular recovery and energy production.',
    shortDescription: 'Mitochondrial protective peptide for cellular recovery',
    price: 199.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2mg)'
    },
    ingredients: ['SS-31 Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Protects mitochondria',
      'Enhances cellular recovery',
      'Improves energy production',
      'Supports tissue repair'
    ],
    allergens: [],
    tags: ['mitochondrial', 'cellular-recovery', 'energy-production', 'peptide'],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewCount: 18
  },

  {
    id: 'tb-500',
    name: 'TB-500',
    category: 'tissue-repair-recovery',
    subcategory: 'recovery-injury-repair',
    description: 'Thymosin Beta-4 fragment that promotes healing and recovery from injuries.',
    shortDescription: 'Thymosin Beta-4 fragment for healing and recovery',
    price: 149.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2mg)'
    },
    ingredients: ['TB-500 Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Promotes healing',
      'Enhances recovery',
      'Supports tissue repair',
      'Reduces recovery time'
    ],
    allergens: [],
    tags: ['healing', 'recovery', 'tissue-repair', 'thymosin', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewCount: 42
  },

  {
    id: 'thymosin-alpha-1',
    name: 'THYMOSIN ALPHA-1',
    category: 'tissue-repair-recovery',
    subcategory: 'recovery-injury-repair',
    description: 'Immune system modulator that enhances recovery and supports overall health.',
    shortDescription: 'Immune system modulator for enhanced recovery',
    price: 179.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (1.6mg)'
    },
    ingredients: ['Thymosin Alpha-1 Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Modulates immune system',
      'Enhances recovery',
      'Supports overall health',
      'Improves immune function'
    ],
    allergens: [],
    tags: ['immune-modulator', 'recovery', 'immune-system', 'peptide'],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviewCount: 25
  },

  {
    id: 'thymosin-beta-4',
    name: 'THYMOSIN BETA-4',
    category: 'tissue-repair-recovery',
    subcategory: 'recovery-injury-repair',
    description: 'Complete Thymosin Beta-4 peptide that promotes healing and tissue regeneration.',
    shortDescription: 'Complete Thymosin Beta-4 for healing and tissue regeneration',
    price: 199.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2mg)'
    },
    ingredients: ['Thymosin Beta-4 Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Promotes healing',
      'Enhances tissue regeneration',
      'Supports recovery',
      'Improves wound healing'
    ],
    allergens: [],
    tags: ['healing', 'tissue-regeneration', 'recovery', 'wound-healing', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 37
  },

  // ORAL PEPTIDES - COGNITION & FOCUS
  {
    id: 'dihexa',
    name: 'DIHEXA',
    category: 'oral-peptides',
    subcategory: 'cognition-focus',
    description: 'Advanced cognitive enhancer that improves memory, learning, and mental clarity.',
    shortDescription: 'Advanced cognitive enhancer for memory and mental clarity',
    price: 299.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (1mg)'
    },
    ingredients: ['Dihexa Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Improves memory function',
      'Enhances learning ability',
      'Increases mental clarity',
      'Supports cognitive performance'
    ],
    allergens: [],
    tags: ['cognitive-enhancer', 'memory', 'learning', 'mental-clarity', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 34
  },

  {
    id: 'pe-22-28',
    name: 'PE-22-28',
    category: 'oral-peptides',
    subcategory: 'cognition-focus',
    description: 'Nootropic peptide that enhances focus, concentration, and cognitive performance.',
    shortDescription: 'Nootropic peptide for enhanced focus and cognitive performance',
    price: 199.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2mg)'
    },
    ingredients: ['PE-22-28 Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Enhances focus and concentration',
      'Improves cognitive performance',
      'Supports mental clarity',
      'Increases alertness'
    ],
    allergens: [],
    tags: ['nootropic', 'focus', 'concentration', 'cognitive-performance', 'peptide'],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewCount: 28
  },

  {
    id: 'semax',
    name: 'SEMAX',
    category: 'oral-peptides',
    subcategory: 'cognition-focus',
    description: 'Russian nootropic peptide that enhances focus, resilience, and neuroplasticity.',
    shortDescription: 'Russian nootropic for focus, resilience, and neuroplasticity',
    price: 149.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (3mg)'
    },
    ingredients: ['Semax Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Enhances focus and attention',
      'Improves resilience',
      'Supports neuroplasticity',
      'Increases mental performance'
    ],
    allergens: [],
    tags: ['nootropic', 'focus', 'resilience', 'neuroplasticity', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewCount: 41
  },

  {
    id: 'semax-selank',
    name: 'SEMAX/SELANK',
    category: 'oral-peptides',
    subcategory: 'cognition-focus',
    description: 'Combined nootropic stack that enhances cognitive function and emotional balance.',
    shortDescription: 'Combined nootropic stack for cognitive function and emotional balance',
    price: 199.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (3mg/3mg)'
    },
    ingredients: ['Semax Peptide', 'Selank Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Enhances cognitive function',
      'Improves emotional balance',
      'Increases focus and clarity',
      'Supports mental well-being'
    ],
    allergens: [],
    tags: ['nootropic-stack', 'cognitive-function', 'emotional-balance', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 35
  },

  // ORGAN/SYSTEM SUPPORT - HORMONAL
  {
    id: 'gonadorelin',
    name: 'GONADORELIN',
    category: 'organ-system-support',
    subcategory: 'libido-hormonal-support',
    description: 'Gonadotropin-releasing hormone that supports healthy hormone production and libido.',
    shortDescription: 'Gonadotropin-releasing hormone for healthy hormone production',
    price: 129.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2mg)'
    },
    ingredients: ['Gonadorelin Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Supports hormone production',
      'Enhances libido',
      'Improves reproductive health',
      'Balances hormonal function'
    ],
    allergens: [],
    tags: ['hormone-production', 'libido', 'reproductive-health', 'peptide'],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviewCount: 22
  },

  {
    id: 'hcg',
    name: 'HCG',
    category: 'organ-system-support',
    subcategory: 'libido-hormonal-support',
    description: 'Human Chorionic Gonadotropin that supports testosterone production and fertility.',
    shortDescription: 'Human Chorionic Gonadotropin for testosterone and fertility support',
    price: 89.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (5000 IU)'
    },
    ingredients: ['HCG', 'Bacteriostatic Water'],
    benefits: [
      'Supports testosterone production',
      'Enhances fertility',
      'Improves libido',
      'Supports reproductive health'
    ],
    allergens: [],
    tags: ['testosterone', 'fertility', 'libido', 'reproductive-health', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.6,
    reviewCount: 33
  },

  {
    id: 'kisspeptin',
    name: 'KISSPEPTIN',
    category: 'organ-system-support',
    subcategory: 'libido-hormonal-support',
    description: 'Reproductive hormone that enhances libido and supports healthy hormone function.',
    shortDescription: 'Reproductive hormone for enhanced libido and hormone function',
    price: 159.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (1mg)'
    },
    ingredients: ['Kisspeptin Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Enhances libido',
      'Supports hormone function',
      'Improves reproductive health',
      'Balances hormonal system'
    ],
    allergens: [],
    tags: ['libido', 'hormone-function', 'reproductive-health', 'peptide'],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviewCount: 19
  },

  {
    id: 'pt-141',
    name: 'PT-141',
    category: 'organ-system-support',
    subcategory: 'libido-hormonal-support',
    description: 'Melanotan II derivative that enhances libido and sexual function.',
    shortDescription: 'Melanotan II derivative for enhanced libido and sexual function',
    price: 119.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2mg)'
    },
    ingredients: ['PT-141 Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Enhances libido',
      'Improves sexual function',
      'Supports sexual health',
      'Increases sexual desire'
    ],
    allergens: [],
    tags: ['libido', 'sexual-function', 'sexual-health', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewCount: 47
  },

  // HEALTH & ANTI-AGING - LONGEVITY
  {
    id: 'dsip',
    name: 'DSIP',
    category: 'health-anti-aging',
    subcategory: 'longevity-sleep-optimization',
    description: 'Delta Sleep Inducing Peptide that promotes deep sleep and nervous system recovery.',
    shortDescription: 'Delta Sleep Inducing Peptide for deep sleep and nervous system recovery',
    price: 139.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2mg)'
    },
    ingredients: ['DSIP Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Promotes deep sleep',
      'Enhances nervous system recovery',
      'Improves sleep quality',
      'Supports circadian rhythm'
    ],
    allergens: [],
    tags: ['sleep', 'deep-sleep', 'nervous-system', 'recovery', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 52
  },

  {
    id: 'epithalon',
    name: 'EPITHALON',
    category: 'health-anti-aging',
    subcategory: 'longevity-sleep-optimization',
    description: 'Anti-aging peptide that supports longevity and sleep optimization.',
    shortDescription: 'Anti-aging peptide for longevity and sleep optimization',
    price: 199.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2mg)'
    },
    ingredients: ['Epithalon Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Supports longevity',
      'Optimizes sleep patterns',
      'Anti-aging properties',
      'Enhances cellular health'
    ],
    allergens: [],
    tags: ['longevity', 'anti-aging', 'sleep-optimization', 'cellular-health', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewCount: 38
  },

  {
    id: 'ghk-cu',
    name: 'GHK-Cu',
    category: 'health-anti-aging',
    subcategory: 'longevity-sleep-optimization',
    description: 'Copper peptide that supports skin health, wound healing, and longevity.',
    shortDescription: 'Copper peptide for skin health, wound healing, and longevity',
    price: 149.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2mg)'
    },
    ingredients: ['GHK-Cu Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Supports skin health',
      'Enhances wound healing',
      'Promotes longevity',
      'Improves skin appearance'
    ],
    allergens: [],
    tags: ['skin-health', 'wound-healing', 'longevity', 'copper-peptide', 'peptide'],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewCount: 29
  },

  {
    id: 'mots-c',
    name: 'MOTS-C',
    category: 'health-anti-aging',
    subcategory: 'longevity-sleep-optimization',
    description: 'Mitochondrial peptide that enhances energy production and supports longevity.',
    shortDescription: 'Mitochondrial peptide for energy production and longevity',
    price: 249.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2mg)'
    },
    ingredients: ['MOTS-C Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Enhances energy production',
      'Supports longevity',
      'Improves mitochondrial function',
      'Optimizes metabolic health'
    ],
    allergens: [],
    tags: ['mitochondrial', 'energy-production', 'longevity', 'metabolic-health', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 31
  },

  // HEALTH & ANTI-AGING - ANTI-AGING
  {
    id: 'nad-plus',
    name: 'NAD+',
    category: 'health-anti-aging',
    subcategory: 'anti-aging',
    description: 'Nicotinamide Adenine Dinucleotide that supports cellular health and anti-aging.',
    shortDescription: 'NAD+ for cellular health and anti-aging support',
    price: 299.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (100mg)'
    },
    ingredients: ['NAD+', 'Bacteriostatic Water'],
    benefits: [
      'Supports cellular health',
      'Anti-aging properties',
      'Enhances energy production',
      'Improves DNA repair'
    ],
    allergens: [],
    tags: ['nad-plus', 'cellular-health', 'anti-aging', 'dna-repair', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 44
  },

  {
    id: 'sermorelin',
    name: 'SERMORELIN',
    category: 'health-anti-aging',
    subcategory: 'anti-aging',
    description: 'Growth hormone releasing peptide that supports anti-aging and vitality.',
    shortDescription: 'Growth hormone releasing peptide for anti-aging and vitality',
    price: 179.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2mg)'
    },
    ingredients: ['Sermorelin Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Supports anti-aging',
      'Enhances vitality',
      'Improves growth hormone levels',
      'Promotes youthful appearance'
    ],
    allergens: [],
    tags: ['anti-aging', 'vitality', 'growth-hormone', 'youthful', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewCount: 36
  },

  // ORGAN/SYSTEM SUPPORT - GUT HEALTH
  {
    id: 'curcumin',
    name: 'CURCUMIN',
    category: 'organ-system-support',
    subcategory: 'gut-health-inflammation',
    description: 'Anti-inflammatory compound that supports gut health and reduces inflammation.',
    shortDescription: 'Anti-inflammatory compound for gut health and inflammation reduction',
    price: 79.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (100mg)'
    },
    ingredients: ['Curcumin', 'Bacteriostatic Water'],
    benefits: [
      'Reduces inflammation',
      'Supports gut health',
      'Antioxidant properties',
      'Improves digestive function'
    ],
    allergens: [],
    tags: ['anti-inflammatory', 'gut-health', 'antioxidant', 'digestive', 'peptide'],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviewCount: 27
  },

  {
    id: 'vip-bpc-157',
    name: 'VIP/BPC-157',
    category: 'organ-system-support',
    subcategory: 'gut-health-inflammation',
    description: 'Combined peptide stack that supports gut health and reduces inflammation.',
    shortDescription: 'Combined peptide stack for gut health and inflammation reduction',
    price: 149.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2mg/5mg)'
    },
    ingredients: ['VIP Peptide', 'BPC-157 Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Supports gut health',
      'Reduces inflammation',
      'Enhances healing',
      'Improves digestive function'
    ],
    allergens: [],
    tags: ['gut-health', 'anti-inflammatory', 'healing', 'digestive', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 33
  },

  // ORGAN/SYSTEM SUPPORT - IMMUNE
  {
    id: 'll-37',
    name: 'LL-37',
    category: 'organ-system-support',
    subcategory: 'fights-infection',
    description: 'Antimicrobial peptide that fights infections and supports immune function.',
    shortDescription: 'Antimicrobial peptide for fighting infections and immune support',
    price: 199.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2mg)'
    },
    ingredients: ['LL-37 Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Fights infections',
      'Supports immune function',
      'Antimicrobial properties',
      'Enhances immune response'
    ],
    allergens: [],
    tags: ['antimicrobial', 'immune-function', 'infection-fighting', 'peptide'],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewCount: 21
  },

  // ORAL PEPTIDES - CALMING & CONNECTION
  {
    id: 'oxytocin',
    name: 'OXYTOCIN',
    category: 'oral-peptides',
    subcategory: 'calming-safety-connection-trust',
    description: 'The love hormone that promotes feelings of calm, safety, connection, and trust.',
    shortDescription: 'The love hormone for calm, safety, connection, and trust',
    price: 129.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (2mg)'
    },
    ingredients: ['Oxytocin Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Promotes feelings of calm',
      'Enhances safety and security',
      'Improves social connection',
      'Builds trust and bonding'
    ],
    allergens: [],
    tags: ['calm', 'safety', 'connection', 'trust', 'love-hormone', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewCount: 39
  },

  // ORAL PEPTIDES - ANXIETY & RESILIENCE
  {
    id: 'selank',
    name: 'SELANK',
    category: 'oral-peptides',
    subcategory: 'anti-anxiety-emotional-resilience',
    description: 'Russian anxiolytic peptide that reduces anxiety and enhances emotional resilience.',
    shortDescription: 'Russian anxiolytic peptide for anxiety reduction and emotional resilience',
    price: 139.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 vial (3mg)'
    },
    ingredients: ['Selank Peptide', 'Bacteriostatic Water'],
    benefits: [
      'Reduces anxiety',
      'Enhances emotional resilience',
      'Improves mood stability',
      'Supports mental well-being'
    ],
    allergens: [],
    tags: ['anxiety-reduction', 'emotional-resilience', 'mood-stability', 'peptide'],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 46
  },

  // SKIN, HAIR, AND AESTHETICS PRODUCTS
  {
    id: 'radiant-xo-serum',
    name: 'RADIANT XO SERUM',
    category: 'aesthetics',
    subcategory: 'skin-hair-aesthetics',
    description: 'Advanced skincare serum that promotes radiant skin, healthy hair, and aesthetic enhancement.',
    shortDescription: 'Advanced skincare serum for radiant skin and aesthetic enhancement',
    price: 89.99,
    currency: 'USD',
    images: {
      main: '/pics/products/item-place holder.png',
      thumbnail: '/pics/products/item-place holder.png'
    },
    nutrition: {
      servingSize: '1 bottle (30ml)'
    },
    ingredients: [
      'Hyaluronic Acid',
      'Vitamin C',
      'Peptides',
      'Antioxidants',
      'Botanical Extracts'
    ],
    benefits: [
      'Promotes radiant skin',
      'Enhances hair health',
      'Aesthetic improvement',
      'Anti-aging properties'
    ],
    allergens: [],
    tags: ['skincare', 'serum', 'radiant-skin', 'hair-health', 'aesthetics'],
    inStock: true,
    featured: true,
    rating: 4.6,
    reviewCount: 58
  }
];

// Helper functions for retrieving product data
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsBySubcategory = (subcategory: string): Product[] => {
  return products.filter(product => product.subcategory === subcategory);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getInStockProducts = (): Product[] => {
  return products.filter(product => product.inStock);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getAllProducts = (): Product[] => {
  return products;
};

export const getProductsByTag = (tag: string): Product[] => {
  return products.filter(product => 
    product.tags.some(productTag => productTag.toLowerCase() === tag.toLowerCase())
  );
};

export const getRelatedProducts = (productId: string, limit: number = 4): Product[] => {
  const product = getProductById(productId);
  if (!product || !product.relatedProducts) return [];
  
  return product.relatedProducts
    .map(id => getProductById(id))
    .filter((p): p is Product => p !== undefined)
    .slice(0, limit);
};

// Category mapping for navigation
export const categoryMap = {
  'weight-management': 'Weight Management',
  'oral-peptides': 'Oral Peptides',
  'fitness-performance': 'Fitness & Performance',
  'health-anti-aging': 'Health & Anti-Aging',
  'tissue-repair-recovery': 'Tissue Repair & Recovery',
  'organ-system-support': 'Organ/System Support',
  'peptides': 'Peptides & Wellness',
  'aesthetics': 'Aesthetics & Skincare'
};

// Subcategory mapping for peptides
export const peptideSubcategoryMap = {
  'fat-loss': 'Fat Loss',
  'muscle-gain-performance': 'Muscle Gain & Performance',
  'recovery-injury-repair': 'Recovery & Injury Repair',
  'cognition-focus': 'Cognition & Focus',
  'libido-hormonal-support': 'Libido & Hormonal Support',
  'longevity-sleep-optimization': 'Longevity & Sleep Optimization',
  'anti-aging': 'Anti-Aging',
  'gut-health-inflammation': 'Gut Health & Inflammation',
  'fights-infection': 'Fights Infection',
  'calming-safety-connection-trust': 'Calming, Safety, Connection & Trust',
  'anti-anxiety-emotional-resilience': 'Anti-Anxiety & Emotional Resilience',
  'skin-hair-aesthetics': 'Skin, Hair & Aesthetics'
};

export const getCategoryDisplayName = (category: string): string => {
  return categoryMap[category as keyof typeof categoryMap] || category;
};

export const getPeptideSubcategoryDisplayName = (subcategory: string): string => {
  return peptideSubcategoryMap[subcategory as keyof typeof peptideSubcategoryMap] || subcategory;
};
