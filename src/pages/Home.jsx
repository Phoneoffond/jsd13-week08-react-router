import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen items-center flex flex-col px-4 py-8">
      <h1 className="pb-6 md:pb-8 text-2xl md:text-4xl font-bold text-center">Welcome to Our App</h1>

      <Link to="/about">
        <button className="bg-[#EF6905] text-lg md:text-2xl text-white px-6 py-2 md:py-3 mb-4 rounded-2xl md:rounded-3xl hover:opacity-80 cursor-pointer transition">
          Go To About
        </button>
      </Link>

      <Link to="/contact">
        <p className="text-[#EF6905] text-base md:text-xl px-4 py-2 rounded-3xl hover:opacity-80 cursor-pointer underline transition">
          Go To Contact
        </p>
      </Link>
    </div>
  );
}