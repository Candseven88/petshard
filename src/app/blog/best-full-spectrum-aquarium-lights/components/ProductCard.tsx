import React from 'react';
import Link from 'next/link';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border-2 border-pink-100">
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">
            🏆 Top Pick #{index + 1}
          </h3>
          {product.rating && (
            <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full">
              <span className="text-yellow-500">★</span>
              <span className="font-bold text-gray-800">{product.rating}/5</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        <h4 className="text-2xl font-bold text-gray-800 mb-3">{product.name}</h4>
        
        {product.price && (
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3 mb-4">
            <p className="text-sm text-gray-600">Price Range</p>
            <p className="text-2xl font-bold text-green-600">{product.price}</p>
          </div>
        )}

        <p className="text-gray-700 mb-4 leading-relaxed bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
          {product.description}
        </p>

        <div className="mb-6">
          <h5 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-pink-500">✨</span>
            Key Features:
          </h5>
          <ul className="space-y-2">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-pink-500 mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href={product.affiliateLink}
            target="_blank"
            rel="nofollow sponsored"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-4 rounded-lg font-bold text-center hover:from-pink-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <span>🛒</span>
            Check Price on Amazon
          </Link>

          {product.videoUrl && (
            <Link
              href={product.videoUrl}
              target="_blank"
              rel="nofollow"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              <span>▶️</span>
              Watch Product Video
            </Link>
          )}
        </div>

        <p className="text-xs text-gray-500 mt-4 text-center">
          ⚠️ Disclosure: We may earn a commission from purchases at no extra cost to you.
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
