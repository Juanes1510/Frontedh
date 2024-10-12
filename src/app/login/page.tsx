'use client'
import '../globals.css';
import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [error, setError] = useState ('');

  const [isLoading, setIsLoading] = useState(false);

  // Simulamos credenciales válidas
  const VALID_EMAIL = 'usuario@ejemplo.com';
  const VALID_PASSWORD = '123456';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validación del formato del correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, ingresa un correo electrónico válido');
      setIsLoading(false);
      return;
    }

    // Simulamos una pequeña demora para mostrar el estado de carga
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Validación de las credenciales
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      setError('');
      alert('¡Inicio de sesión exitoso!');
    } else {
      setError('El correo electrónico o la contraseña no coinciden');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 p-4">
      <div className="flex w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Sección izquierda */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-purple-600 to-purple-800 p-12 flex-col justify-between relative">
          <div className="relative z-10">
            <h1 className="text-white text-6xl font-bold mb-6">JobBoard</h1>
            <p className="text-purple-200 text-xl leading-relaxed">
              Encuentra las mejores oportunidades laborales y conecta con empresas líderes en el mercado.
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-500 rounded-full opacity-20"></div>
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-500 rounded-full opacity-20"></div>
        </div>

        {/* Sección derecha - Formulario */}
        <div className="w-full md:w-1/2 p-8 md:p-12 space-y-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Bienvenido de nuevo</h2>
            <p className="text-gray-600">Ingresa tus credenciales para continuar</p>
          </div>

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

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700" htmlFor="email">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200 ease-in-out"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700" htmlFor="password">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200 ease-in-out"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
                <span className="ml-2 text-sm text-gray-600">Recordarme</span>
              </label>
              <a href="#" className="text-sm text-purple-600 hover:text-purple-500">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg text-white font-medium 
                ${isLoading 
                  ? 'bg-purple-400 cursor-not-allowed' 
                  : 'bg-purple-600 hover:bg-purple-700 active:bg-purple-800'
                } 
                transition-all duration-200 ease-in-out transform hover:scale-[1.02]`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Iniciando sesión...
                </span>
              ) : (
                'Iniciar sesión'
              )}
            </button>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                ¿No tienes una cuenta?{' '}
                <a href="#" className="text-purple-600 hover:text-purple-500 font-medium">
                  Regístrate aquí
                </a>
              </p>
            </div>
          </form>
        </div>
     </div>
     </div>
  );
}