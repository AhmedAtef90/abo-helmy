import React, { useState } from 'react';
import { Layers } from 'lucide-react';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  objectFit?: 'contain' | 'cover';
  fallbackName?: string;
  fallbackNumber?: number;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  objectFit = 'contain',
  fallbackName,
  fallbackNumber,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#EAE6DD] flex items-center justify-center ${containerClassName}`}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#E3DFD5] animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#B8AA94] border-t-transparent animate-spin" />
        </div>
      )}

      {hasError ? (
        <div className="w-full h-full min-h-[220px] p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#EDE8DF] to-[#DDD7CB] text-[#776653]">
          <div className="w-12 h-12 rounded-lg bg-[#FAF7F2] border border-[#B8AA94]/40 flex items-center justify-center mb-3 text-[#252623] shadow-xs">
            <Layers className="w-6 h-6 stroke-[1.5]" />
          </div>
          {fallbackNumber && (
            <span className="text-xs uppercase tracking-widest text-[#776653] font-medium mb-1">
              Product {fallbackNumber < 10 ? `0${fallbackNumber}` : fallbackNumber}
            </span>
          )}
          <span className="text-sm font-semibold text-[#252623] max-w-[200px] leading-snug">
            {fallbackName || alt}
          </span>
          <span className="text-[11px] text-[#776653]/80 mt-1">
            Egyptian Natural Stone Sample
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full transition-opacity duration-300 ${
            objectFit === 'contain' ? 'object-contain' : 'object-cover'
          } ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        />
      )}
    </div>
  );
};
