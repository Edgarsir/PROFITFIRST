// ES6 Image Utilities - Modern Image Handling

/**
 * Image loading utility with Promise support
 */
export const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Preload multiple images
 */
export const preloadImages = async (imageSources: string[]): Promise<HTMLImageElement[]> => {
  try {
    const imagePromises = imageSources.map(src => loadImage(src));
    return await Promise.all(imagePromises);
  } catch (error) {
    console.error('Error preloading images:', error);
    throw error;
  }
};

/**
 * Get optimized image URL with fallback
 */
export const getOptimizedImageUrl = (
  src: string, 
  width?: number, 
  height?: number,
  fallback?: string
): string => {
  if (!src) return fallback || '';
  
  // For SVGs, return as-is
  if (src.endsWith('.svg')) return src;
  
  // For other formats, you could add optimization logic here
  // e.g., for services like Cloudinary, ImageKit, etc.
  return src;
};

/**
 * Image categories for better organization
 */
export const IMAGE_CATEGORIES = {
  PERSONAS: 'personas',
  BENEFITS: 'benefits',
  AVATARS: 'avatars',
  LOGOS: 'logos',
  ICONS: 'icons',
  HERO: 'hero',
} as const;

export type ImageCategory = typeof IMAGE_CATEGORIES[keyof typeof IMAGE_CATEGORIES];