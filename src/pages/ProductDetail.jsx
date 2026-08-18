import {useParams} from "react-router-dom"
import {products} from "../mock-data/products";
export default function ProductDetail() {
 
  const {productId} = useParams();
  const product = products.find((p)=>p.id === productId);

  if(!product){
 return <div>Product not found.</div>

  }

  return (
    <div>
     <h1>{product.name}</h1>
     <p>{product.description}</p>
     <p>{product.price}</p>
    </div>
  );
}
