'use client'
import { useState } from 'react';

interface Product {
  name: string;
  description: string;
  price: number;
  category: string;
}

export default function CreateProductForm() {
  // Estado para almacenar los datos del formulario
  const [product, setProduct] = useState<Product>({
    name: '',
    description: '',
    price: 0,
    category: ''
  });

  const [error, setError] = useState<string | null>(null);

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación básica de los datos del producto
    if (!product.name || !product.description || !product.category || product.price <= 0) {
      setError("Por favor, completa todos los campos correctamente.");
      return;
    }

    setError(null);
    console.log("Producto creado:", product);
    
    // Aquí podrías enviar los datos a tu API o backend
    // Ejemplo: enviarProducto(product);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Crear Producto</h2>
      
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Nombre del Producto</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Nombre del producto"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Descripción</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Descripción del producto"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Precio</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Precio del producto"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Categoría</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Categoría del producto"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        >
          Crear Producto
        </button>
      </form>
    </div>
  );
}
