'use client'
import { Dispatch, SetStateAction } from 'react';
interface Props {
  setIsFormVisible: Dispatch<SetStateAction<boolean>>
  isFormVisible: boolean
}

const Formulario = ({isFormVisible ,setIsFormVisible}:Props) => {

  return (
    <div>
      {/* Formulario que se muestra al hacer clic */}
      
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Create Product</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="productName" className="block text-gray-700">Product Name</label>
                <input
                  type="text"
                  id="productName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter product name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700">Price</label>
                <input
                  type="number"
                  id="price"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter product price"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700">Category</label>
                <input
                  type="text"
                  id="category"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter product category"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  onClick={()=>{
                    setIsFormVisible(!isFormVisible)
                  }}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
    
    </div>
  );
};

export default Formulario;
