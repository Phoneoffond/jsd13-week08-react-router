import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-[#EF6905] py-3 md:py-4 px-4 flex flex-wrap justify-center gap-3 md:gap-6">
      <Link to="/" className="text-white text-sm md:text-base font-medium hover:opacity-80">Home</Link>
      <Link to="/about" className="text-white text-sm md:text-base font-medium hover:opacity-80">About</Link>
      <Link to="/contact" className="text-white text-sm md:text-base font-medium hover:opacity-80">Contact</Link>
      <Link to="/products" className="text-white text-sm md:text-base font-medium hover:opacity-80">Products</Link>
    </nav>
  );
}