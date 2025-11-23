import { Product } from '../types';

interface ProductRecommendationProps {
  product: Product;
  index: number;
}

export default function ProductRecommendation({ product, index }: ProductRecommendationProps) {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-6 border-2 border-pink-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
          {index + 1}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
      </div>

      <p className="text-gray-700 mb-4 italic">
        "{product.description}"
      </p>

      <div className="space-y-2 mb-5">
        <h4 className="font-semibold text-gray-700 text-sm mb-2">Key Features:</h4>
        {product.features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <span className="text-green-600 mt-0.5">✅</span>
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
        View on Amazon →
      </a>

      <p className="text-xs text-gray-500 mt-3 text-center">
        As an Amazon Associate, we earn from qualifying purchases
      </p>
    </div>
  );
}
