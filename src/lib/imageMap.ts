export const categoryToBoxImage: Record<string, string> = {
  'weight-management': '/pics/products/boxes/weight-box.png',
  'fitness-performance': '/pics/products/boxes/fitness-box.png',
  'oral-peptides': '/pics/products/boxes/oral-box.png',
  'tissue-repair-recovery': '/pics/products/boxes/tissue-box.png',
  'health-anti-aging': '/pics/products/boxes/box.png',
  'organ-system-support': '/pics/products/boxes/box.png',
  'aesthetics': '/pics/products/boxes/box.png',
};

export function getCategoryBoxImage(category: string | undefined): string {
  if (!category) return '/pics/products/boxes/box.png';
  return categoryToBoxImage[category] || '/pics/products/boxes/box.png';
}




