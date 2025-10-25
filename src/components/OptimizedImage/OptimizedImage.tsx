import { useState, useEffect } from 'react';
import { getOptimizedImageUrl } from '../../assets/images/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fallback?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  fallback,
  loading = 'lazy',
  onLoad,
  onError,
}: OptimizedImageProps): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    const optimizedSrc = getOptimizedImageUrl(src, width, height, fallback);
    setImageSrc(optimizedSrc);
  }, [src, width, height, fallback]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    if (fallback && imageSrc !== fallback) {
      setImageSrc(fallback);
      setHasError(false);
    }
    onError?.();
  };

  if (hasError && !fallback) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Image not found</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse rounded"
          style={{ width, height }}
        />
      )}
      <img
        src={imageSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        width={width}
        height={height}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};