import { useNavigate } from 'react-router-dom';
import { products } from '../mock-data/products';

export default function Products() {
  const navigate = useNavigate()

  const handleViewDetails = (productId) => {
    navigate(`/products/${productId}`);
  }

  return (
    <div className="text-left bg-white rounded-2xl md:rounded-4xl flex flex-col p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-300 rounded-2xl md:rounded-4xl p-4 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-lg md:text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-sm md:text-base text-gray-700 mb-2">{product.description}</p>
              <p className=" md:text-lg text-2xl font-bold text-orange-500">${product.price.toFixed(2)}</p>
              <div>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-2xl hover:opacity-80 text-sm md:text-base whitespace-nowrap"
                  onClick={() => handleViewDetails(product.id)}>
                View Details
              </button>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}