import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; 


export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-200">
      <Navbar />
      <main className="px-4 py-6 md:px-8 md:py-8 flex flex-col max-w-6xl mx-auto w-full flex-1">
        <Outlet />
      </main>
    </div>
  );
}