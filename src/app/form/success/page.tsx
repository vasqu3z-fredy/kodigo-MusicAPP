
//Pagina para simular un registro exitoso

export default function RegistroExitoso() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-6">
      <div className="bg-gray-800 p-8 rounded shadow max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">🎉 Registro Exitoso</h1>
        <p className="text-lg">
          Gracias por registrarte. Por favor revisa tu bandeja de entrada para confirmar tu cuenta.
        </p>
        <p className="text-sm mt-4 text-gray-400">
          Si no ves el correo, revisa tu carpeta de spam.
        </p>
      </div>
    </div>
  );
}
