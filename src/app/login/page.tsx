'use client';
import '../globals.css';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { cookies } from 'next/headers'
import { createCookie } from '@/hooks/cokies';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validEmail = 'user@example.com';
    const validPassword = '123456';

    if (email === validEmail && password === validPassword) {
      setError('');
      createCookie("token","jjhjjjh") 
      router.push('/');
    } else {
      setError('Email o contraseña incorrectos');
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100">
      {/* Contenedor principal con flex para dividir el contenido */}
      <div className="flex items-center w-10/12 max-w-6xl">

        {/* Sección izquierda con el logo y texto de Facebook, sin cuadros */}
        <div className="w-1/2 text-left pr-12">
          <h1 className="text-purple-500 text-8xl font-bold">JobBoard</h1>
          <p className="text-xl mt-4">
            Conéctate con amigos y el mundo que te rodea.
          </p>
        </div>

        {/* Sección derecha con el formulario dentro de un cuadro */}
        <div className="w-1/2 flex justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-purple-800">Iniciar sesión</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Ingresa tu correo"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Mostrar el mensaje de error si las credenciales no son válidas */}
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full bg-purple-500 text-white font-semibold py-2 px-4 rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
