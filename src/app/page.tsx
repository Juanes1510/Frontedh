import Cartas from "./components/card";
import Header from "./components/header";
import "./globals.css";
import CreateProductForm from "./components/formulario";

export default function Home() {
  return (
    <div className="w-full justify-center items-center">
      <Header />
      <Cartas />
      <CreateProductForm />
      <div className="relative min-h-screen">
      {/* Contenido de la página */}
      <h1 className="text-center text-2xl font-bold mt-10">Bienvenido a mi página</h1>

      {/* Botón flotante */}
      <button className="fixed bottom-5 right-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full w-16 h-16 text-3xl shadow-lg hover:from-purple-600 hover:to-blue-600 transition-colors duration-300">
        +
      </button>
    </div>
    
    </div>
  )
}


