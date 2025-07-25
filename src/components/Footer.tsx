//**Componente Footer src/componets/Footer */
export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-center py-6 mt-12 border-t border-gray-800">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Kodigo Music. Todos los derechos reservados.
      </p>
      <p className="text-xs mt-1">
        Inspirado por Spotify API · Desarrollado por Alex@nder_flores19 usando Next.js y Tailwind CSS
      </p>
    </footer>
  );
}
