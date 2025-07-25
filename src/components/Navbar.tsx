//**Componente para navegacion * src/componets/Navbar */

'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
const linkBase =
    'px-4 py-2 rounded-md transition-colors duration-300 hover:bg-green-700 hover:text-white hover:shadow-lg';

  const activeStyle = 'text-green-400 font-semibold';

  return (
    <nav className="bg-black p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-white">🎵 Kodigo Music</h1>
      <div className="space-x-2">
        <Link
          href="/"
          className={`${linkBase} ${pathname === '/' ? activeStyle : 'text-white'}`}
        >
          Inicio
        </Link>
        <Link
          href="/form"
          className={`${linkBase} ${pathname === '/form' ? activeStyle : 'text-white'}`}
        >
          Registrarse
        </Link>
         <Link
          href="/form"
          className={`${linkBase} ${pathname === '#' ? activeStyle : 'text-white'}`}
        >
          ⚙
        </Link>
      </div>
    </nav>
  );
}
