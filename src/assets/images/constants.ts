// ES6 Image Constants - Modern Configuration

/**
 * Image dimensions for consistent sizing
 */
export const IMAGE_SIZES = {
  AVATAR: { width: 60, height: 60 },
  ICON: { width: 40, height: 40 },
  LOGO: { width: 120, height: 40 },
  PERSONA: { width: 400, height: 300 },
  HERO: { width: 768, height: 554 },
  BENEFIT_MAIN: { width: 600, height: 400 },
  BENEFIT_ICON: { width: 80, height: 80 },
} as const;

/**
 * Image quality settings
 */
export const IMAGE_QUALITY = {
  LOW: 60,
  MEDIUM: 80,
  HIGH: 95,
} as const;

/**
 * Supported image formats
 */
export const IMAGE_FORMATS = {
  SVG: 'svg',
  PNG: 'png',
  JPG: 'jpg',
  WEBP: 'webp',
} as const;

/**
 * Default fallback images
 */
export const FALLBACK_IMAGES = {
  AVATAR: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiNFNUU3RUIiLz4KPGNpcmNsZSBjeD0iMzAiIGN5PSIyNSIgcj0iMTIiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+aCBkPSJNMTAgNTBDMTAgNDAgMTggMzUgMzAgMzVDNDIgMzUgNTAgNDAgNTAgNTAiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+',
  PLACEHOLDER: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUNBM0FGIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiPkltYWdlPC90ZXh0Pgo8L3N2Zz4=',
} as const;