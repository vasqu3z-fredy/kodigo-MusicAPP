'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

type FormData = {
  nombre: string;
  correo: string;
};

export default function FormPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();


  
  const onSubmit = async (data: FormData) => {
// De momento no se mandan los datos a un servidor o API   

    // Redirigir al mensaje de éxito
    router.push('/form/success');
  };

  return (
    <div className="flex flex-col justify-center items-center flex-1 min-h-screen">
      <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-white">Formulario de Registro</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-white">
          <div>
            <label className="block mb-1 font-semibold">Nombre</label>
            <input
              {...register('nombre', { required: 'El nombre es obligatorio' })}
              className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring focus:ring-green-400"
            />
            {errors.nombre && <p className="text-red-400 text-sm mt-1">{errors.nombre.message}</p>}
          </div>

          <div>
            <label className="block mb-1 font-semibold">Correo electrónico</label>
            <input
              {...register('correo', {
                required: 'El correo es obligatorio',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Correo inválido',
                },
              })}
              className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring focus:ring-green-400"
            />
            {errors.correo && <p className="text-red-400 text-sm mt-1">{errors.correo.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition-colors text-white font-bold py-2 px-4 rounded"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
