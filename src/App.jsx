import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import {Layout} from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About />},
    { path: '/products', element: <Products /> },
    { path: '/products/:productId', element: <ProductDetail /> },
  ],
  errorElement: (
    <div className = "min-h-screen flex justify-center items-center">
      <h1 className = "text-4xl">404: Page not found 🥵</h1>
      <Link to={'/'}>Back to Home</Link>
    </div>
  )
}])
export default function App() {
  return (
    <RouterProvider router={router} />
  );
}