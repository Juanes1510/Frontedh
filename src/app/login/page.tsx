'use client'
import '../globals.css';

import React, { useState } from 'react';

export default async function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState ('')
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log('Iniciando sesión con', email, password);
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100">
      <div className="flex items-center w-10/12 max-w-6xl">
        {/* Sección izquierda con el logo y texto */}
        <div className="w-1/2 text-left mr-12">
          <h1 className="text-purple-700 text-8xl font-bold">JobBoard</h1>
          <p className="text-xl mt-4">
            Inicia sesion para una mejor experiencia
          </p>
        </div>

        {/* Sección derecha con el formulario */}
        <div className="w-1/2 bg-white shadow-xl rounded-lg p-8">
          <form onSubmit={handleLogin} className="space-y-6">
           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Correo electrónico
           </label>
            <input
           id="email"
           type="email"
           placeholder="Correo electrónico o teléfono"
           className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-purple-900"
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
           placeholder="Contraseña"
           className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-purple-900"
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
           className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
           >
         </button>
         <button
           type="submit"
           className="w-full bg-purple-700 text-white font-semibold py-3 rounded hover:bg-purple-600 transition duration-200"
           >
           Iniciar sesión
         </button>
        </div>

        
          </form>
        </div>
    </div>
  );
}

