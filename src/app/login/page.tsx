'use client'

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validEmail = 'user@example.com';
    const validPassword = '123456';

    if (email === validEmail && password === validPassword) {
      setError('');
      await createCookie("token","token valido") 
      router.push('/');
    } else {
      setError('Email o contraseña incorrectos');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-blue-600 text-white flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">JobBoard</h1>
          <p className="text-lg md:text-xl mb-8">
            Descubre oportunidades únicas y conecta con empresas líderes en un solo lugar.
          </p>
          <div className="bg-blue-500 rounded-full py-3 px-6 text-center text-white font-semibold hover:bg-blue-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
            Explorar Trabajos
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 bg-white">
          <h2 className="text-3xl font-bold mb-8 text-blue-600 text-center">Iniciar sesión</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                placeholder="Ingresa tu correo"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Iniciar sesión
            </button>
          </form>
          <div className="mt-6 text-center">
            <a href="#" className="text-blue-600 hover:underline">¿Olvidaste tu contraseña?</a>
          </div>
        </div>
      </div>
    </div>
  );
}