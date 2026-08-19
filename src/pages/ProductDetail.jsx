import {useParams} from 'react-router-dom';
import { products } from '../mock-data/products';

export default function ProductDetail() {
  
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div className="bg-white text-slate-800 text-4xl text-center font-bold rounded-2xl md:rounded-4xl p-4 md:p-8">Product not found</div>;
  }


  return (
    <div className="bg-white rounded-2xl md:rounded-4xl p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">{product.name}</h1>
      <p className="text-sm md:text-base text-gray-700">{product.description}</p>
      <p className="text-lg md:text-xl font-bold text-orange-500 mt-4">${product.price.toFixed(2)}</p>
    </div>
  );
}