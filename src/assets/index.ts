// ES6 Assets Barrel Export - Modern Asset Management

// Re-export all images
export * from './images';
export { default as images } from './images';

// Re-export image utilities
export * from './images/utils';
export * from './images/constants';

// Asset categories for easy access
export { IMAGE_CATEGORIES, IMAGE_SIZES, IMAGE_QUALITY, FALLBACK_IMAGES } from './images/constants';