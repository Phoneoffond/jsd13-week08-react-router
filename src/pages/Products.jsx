import {useNavigate} from "react-router-dom";
import {products} from "../mock-data/products";
export default function Products() {
    const navigate = useNavigate()
    const handleViewDetail = (productId) => {
        navigate(`/products/${productId}`) ;
    }
  return (
    <div className = "p-4 bg-white rounded-md shadow-md">
        <h1 className = "text-2xl font-bold mb-4">Product</h1>
   <div className = "grod grid-col-1 sm:grid-col-2 lg:grid-col-3 gap-4">
   {products.map((product)=>(
    <div key={product.id}>
        <h2>{product.name}</h2>
        <p>{product.description }</p>
        <p>{product.price.toFixed(2)}</p>
        <div>
            <button onClick={() => handleViewDetail(product.id)} 
            className = "text-white bg-teal-500 px-4 py-2 roundes-md hover:bg-teal-500">View Detail</button>
        </div>
    </div>

   ))}
   </div>
    </div>
  )
}

