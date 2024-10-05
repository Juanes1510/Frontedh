'use client'
import '../globals.css';

import React, { useState } from 'react';

export default async function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            <input
              type="email"
              placeholder="Correo electrónico o teléfono"
              className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-purple-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-purple-900"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-purple-700 text-white font-semibold py-3 rounded hover:bg-purple-600 transition duration-200"
            >
              Iniciar sesión
            </button>
          </form>
         
        </div>
      </div>
    </div>
  );
}

