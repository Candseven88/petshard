import { Product } from '../types';

interface ProductRecommendationProps {
  product: Product;
  index: number;
}

export default function ProductRecommendation({ product, index }: ProductRecommendationProps) {
  const renderStars = (rating?: number) => {
    if (!rating) return null;
    return (
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? "text-yellow-400 text-lg" : "text-gray-300 text-lg"}>
            ⭐
          </span>
        ))}
        <span className="text-sm text-gray-600 ml-2">{rating}/5</span>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-6 border-2 border-pink-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
          #{index + 1}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
          {product.price && (
            <p className="text-sm text-gray-600 mt-1">Price: {product.price}</p>
          )}
        </div>
      </div>

      {renderStars(product.rating)}

      <p className="text-gray-700 mb-4 italic border-l-4 border-pink-400 pl-4">
        "{product.description}"
      </p>

      <div className="space-y-2 mb-5">
        <h4 className="font-semibold text-gray-700 text-sm mb-2">Key Features:</h4>
        {product.features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <span className="text-green-600 mt-0.5 text-lg">✅</span>
            <span className="text-sm text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      <a
        href={product.affiliateLink}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className="block w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
      >
        Check Price on Amazon →
      </a>

      <p className="text-xs text-gray-500 mt-3 text-center">
        As an Amazon Associate, we earn from qualifying purchases
      </p>
    </div>
  );
}
