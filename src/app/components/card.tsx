/// esta vista la va hacer helen y daisy
const DataProductos = [
  {
    "imagen_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5btiIDgDHjAJkMLChzsElwtwrHv3CNOka5c8moSz5J0z3hb8l",
    "titulo": "Lead Product Desing",
    "descripcion": "You will be responsible for the visual design for multi-device.Understand basic design. Users Journey, ideation and Wireframing etc..."
  },
  {
    "imagen_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5btiIDgDHjAJkMLChzsElwtwrHv3CNOka5c8moSz5J0z3hb8l",
    "titulo": "Lead Product Desing",
    "descripcion": "You will be responsible for the visual design for multi-device.Understand basic design. Users Journey, ideation and Wireframing etc..."
  },
  {
    "imagen_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5btiIDgDHjAJkMLChzsElwtwrHv3CNOka5c8moSz5J0z3hb8l",
    "titulo": "Lead Product Desing",
    "descripcion": "You will be responsible for the visual design for multi-device.Understand basic design. Users Journey, ideation and Wireframing etc..."
  },
  {
    "imagen_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5btiIDgDHjAJkMLChzsElwtwrHv3CNOka5c8moSz5J0z3hb8l",
    "titulo": "Lead Product Desing",
    "descripcion": "You will be responsible for the visual design for multi-device.Understand basic design. Users Journey, ideation and Wireframing etc..."
  },
  {
    "imagen_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5btiIDgDHjAJkMLChzsElwtwrHv3CNOka5c8moSz5J0z3hb8l",
    "titulo": "Lead Product Desing",
    "descripcion": "You will be responsible for the visual design for multi-device.Understand basic design. Users Journey, ideation and Wireframing etc..."
  }
]
export default function Cartas() {
  return (

    <section className="min-h-screen bg-[#f7f7f7] p-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {DataProductos.map((produc) => (
          <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
              <img className="rounded-lg p-2 h-20 w-20"
                src={produc.imagen_url} alt="icon1" />
              <div className="px-4 py-4">
                <div className="font-bold text-xl mb-2">{produc.titulo}</div>
                <p className="text-gray-700 text-base">
                  {produc.descripcion}
                </p>
              </div>
              <div className="px-4 py-2 flex space-x-4">
                <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
                  Full Time
                </button>
                <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
                  Min 1 Year
                </button>
                <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
                  Director
                </button>
              </div>
              <div className="flex p-4">
                <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover"
                  src="https://imagenes.eltiempo.com/files/image_1200_600/files/fp/uploads/2024/03/19/65f9d492598ea.r_d.1079-279-5658.jpeg" alt="Laura" />
                <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover ml-[-6px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3HBG7VE4Vj7zQVcxw8rM-rgpLAUWVIpQw3w&s" alt="Carlos" />
                <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover ml-[-6px]"
                  src="https://pymstatic.com/5844/conversions/personas-emocionales-wide_webp.webp" alt="Sara" />
                <div className="flex h-6 w-6 items-center justify-center rounded-full  border-gray-400
      bg-[#f5f2f2] object-cover ml-[-6px] text-sm text-gray-600 ">
                  <span>+2</span>
                </div>
                <div className="text-center my-8">
                  <h2 className="text-gray-400 font-bold px-4 py-4 flex space-x-4">
                    5 Friends Work Here</h2></div>
              </div>
              <div className="flex px-4 space-x-8">
                <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-7 rounded">
                  Apply now
                </button>
                <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#5e5c5c] font-bold py-2 px-7 rounded">
                  Messages
                </button>
                <button className="mt-4 hover:bg-[#e3e3e6] text-[#6361ba] border-[2px] border-blue-200 px-2 rounded-full">
                 <svg className="h-4 w-6" xmlns="https://img.icons8.com/?size=100&id=56304&format=png&color=000000" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M11 4h10v10M11 4l9.35 9.35-9.9 9.9H1V14.1l9.35-9.35z" />
                 </svg> 
                </button>
              </div>
            </div>
          </>
        ))}

        {/* <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
          <img className="rounded-lg p-2 h-20 w-20"
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ5LBCBDg8YsMzr16BhLJ45NohgxyFE7ujoqb9-zSeXVnnuP35s" alt="icon2" />
          <div className="px-4 py-4">
            <div className="font-bold text-xl mb-2">UI / UX Designer - Remote</div>
            <p className="text-gray-700 text-base">
              You will be responsible for the visual design for multi-device.
              Understand basic design. Users Journey, ideation and Wireframing etc..
            </p>
          </div>
          <div className="px-4 py-2 flex space-x-4">
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Full Time
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Min 1 Year
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Director
            </button>
          </div>
          <div className="flex p-4">
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover"
              src="https://imagenes.eltiempo.com/files/image_1200_600/files/fp/uploads/2024/03/19/65f9d492598ea.r_d.1079-279-5658.jpeg" alt="Laura" />
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover ml-[-6px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3HBG7VE4Vj7zQVcxw8rM-rgpLAUWVIpQw3w&s" alt="Carlos" />
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover ml-[-6px]"
              src="https://pymstatic.com/5844/conversions/personas-emocionales-wide_webp.webp" alt="Sara" />
            <div className="flex h-6 w-6 items-center justify-center rounded-full  border-gray-400
      bg-[#f5f2f2] object-cover ml-[-6px] text-sm text-gray-600 ">
              <span>+2</span>
            </div>
            <div className="text-center my-8">
              <h2 className="text-gray-400 font-bold px-6 py-4 flex space-x-4">
                5 Friends Work Here</h2></div>
          </div>
          <div className="flex px-4 space-x-8">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-7 rounded">
              Apply now
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#5e5c5c] font-bold py-2 px-7 rounded">
              Messages
            </button>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
          <img className="rounded-lg p-2 h-20 w-20"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTohdXVPXljLMiwXkfQl8hGUtdSXfH_czS3Wr_UDWQstTTClQ8B" alt="icon3" />
          <div className="px-4 py-4">
            <div className="font-bold text-xl mb-2">Lead Product Desing</div>
            <p className="text-gray-700 text-base">
              You will be responsible for the visual design for multi-device.
              Understand basic design. Users Journey, ideation and Wireframing etc...
            </p>
          </div>
          <div className="px-4 py-2 flex space-x-4">
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Full Time
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Min 1 Year
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Director
            </button>
          </div>
          <div className="flex p-4">
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover"
              src="https://imagenes.eltiempo.com/files/image_1200_600/files/fp/uploads/2024/03/19/65f9d492598ea.r_d.1079-279-5658.jpeg" alt="Laura" />
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover ml-[-6px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3HBG7VE4Vj7zQVcxw8rM-rgpLAUWVIpQw3w&s" alt="Carlos" />
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover ml-[-6px]"
              src="https://pymstatic.com/5844/conversions/personas-emocionales-wide_webp.webp" alt="Sara" />
            <div className="flex h-6 w-6 items-center justify-center rounded-full  border-gray-400
      bg-[#f5f2f2] object-cover ml-[-6px] text-sm text-gray-600 ">
              <span>+2</span>
            </div>
            <div className="text-center my-8">
              <h2 className="text-gray-400 font-bold px-6 py-4 flex space-x-4">
                5 Friends Work Here</h2></div>
          </div>
          <div className="flex px-4 space-x-8">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-7 rounded">
              Apply now
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#5e5c5c] font-bold py-2 px-7 rounded">
              Messages
            </button>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
          <img className="rounded-lg p-2 h-20 w-20"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiEfuNRNgE0iuo9NN4qAOkFsAkz2CebHPDCjQK-18EfWyVvrs" alt="icon4" />
          <div className="px-4 py-4">
            <div className="font-bold text-xl mb-2">UI / UX Designer - Remote</div>
            <p className="text-gray-700 text-base">
              You will be responsible for the visual design for multi-device.
              Understand basic design. Users Journey, ideation and Wireframing etc...
            </p>
          </div>
          <div className="px-4 py-2 flex space-x-4">
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Full Time
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Min 1 Year
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Director
            </button>
          </div>
          <div className="flex p-4">
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover"
              src="https://imagenes.eltiempo.com/files/image_1200_600/files/fp/uploads/2024/03/19/65f9d492598ea.r_d.1079-279-5658.jpeg" alt="Laura" />
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover ml-[-6px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3HBG7VE4Vj7zQVcxw8rM-rgpLAUWVIpQw3w&s" alt="Carlos" />
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover ml-[-6px]"
              src="https://pymstatic.com/5844/conversions/personas-emocionales-wide_webp.webp" alt="Sara" />
            <div className="flex h-6 w-6 items-center justify-center rounded-full  border-gray-400
      bg-[#f5f2f2] object-cover ml-[-6px] text-sm text-gray-600 ">
              <span>+2</span>
            </div>
            <div className="text-center my-8">
              <h2 className="text-gray-400 font-bold px-6 py-4 flex space-x-4">
                5 Friends Work Here</h2></div>
          </div>
          <div className="flex px-4 space-x-8">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-7 rounded">
              Apply now
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#5e5c5c] font-bold py-2 px-7 rounded">
              Messages
            </button>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
          <img className="rounded-lg p-2 h-20 w-20"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEVw8UqNj39UCz7KWkOntAYohs8-U0uCIVD8C7O_WvqzWpohen" alt="icon5" />
          <div className="px-4 py-4">
            <div className="font-bold text-xl mb-2">Lead Product Desing</div>
            <p className="text-gray-700 text-base">
              You will be responsible for the visual design for multi-device.
              Understand basic design. Users Journey, ideation and Wireframing etc...
            </p>
          </div>
          <div className="px-4 py-2 flex space-x-4">
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Full Time
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Min 1 Year
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Director
            </button>
          </div>
          <div className="flex p-4">
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover"
              src="https://imagenes.eltiempo.com/files/image_1200_600/files/fp/uploads/2024/03/19/65f9d492598ea.r_d.1079-279-5658.jpeg" alt="Laura" />
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover ml-[-6px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3HBG7VE4Vj7zQVcxw8rM-rgpLAUWVIpQw3w&s" alt="Carlos" />
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover ml-[-6px]"
              src="https://pymstatic.com/5844/conversions/personas-emocionales-wide_webp.webp" alt="Sara" />
            <div className="flex h-6 w-6 items-center justify-center rounded-full  border-gray-400
      bg-[#f5f2f2] object-cover ml-[-6px] text-sm text-gray-600 ">
              <span>+2</span>
            </div>
            <div className="text-center my-8">
              <h2 className="text-gray-400 font-bold px-6 py-4 flex space-x-4">
                5 Friends Work Here</h2></div>
          </div>
          <div className="flex px-4 space-x-8">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-7 rounded">
              Apply now
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#5e5c5c] font-bold py-2 px-7 rounded">
              Messages
            </button>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
          <img className="rounded-lg p-2 h-20 w-20"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzo1UcS5j3JQ_63dKEl4am5lVnQwOBUqH41PHAklOK1cUpF80B" alt="icon6" />
          <div className="px-4 py-4">
            <div className="font-bold text-xl mb-2">Lead Product Desing</div>
            <p className="text-gray-700 text-base">
              You will be responsible for the visual design for multi-device.
              Understand basic design. Users Journey, ideation and Wireframing etc...
            </p>
          </div>
          <div className="px-4 py-2 flex space-x-4">
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Full Time
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Min 1 Year
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Director
            </button>
          </div>
          <div className="flex p-4">
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover"
              src="https://imagenes.eltiempo.com/files/image_1200_600/files/fp/uploads/2024/03/19/65f9d492598ea.r_d.1079-279-5658.jpeg" alt="Laura" />
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover ml-[-6px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3HBG7VE4Vj7zQVcxw8rM-rgpLAUWVIpQw3w&s" alt="Carlos" />
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover ml-[-6px]"
              src="https://pymstatic.com/5844/conversions/personas-emocionales-wide_webp.webp" alt="Sara" />
            <div className="flex h-6 w-6 items-center justify-center rounded-full  border-gray-400
      bg-[#f5f2f2] object-cover ml-[-6px] text-sm text-gray-600 ">
              <span>+2</span>
            </div>
            <div className="text-center my-8">
              <h2 className="text-gray-400 font-bold px-6 py-4 flex space-x-4">
                5 Friends Work Here</h2></div>
          </div>
          <div className="flex px-4 space-x-8">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-7 rounded">
              Apply now
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#5e5c5c] font-bold py-2 px-7 rounded">
              Messages
            </button>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
          <img className="rounded-lg p-2 h-20 w-20"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSEf3BHGTs-wfWVur-C3erAFYnAKntiiGPOrYmJDBJ4a8NSUeYY" alt="icon7" />
          <div className="px-4 py-4">
            <div className="font-bold text-xl mb-2">Lead Product Desing</div>
            <p className="text-gray-700 text-base">
              You will be responsible for the visual design for multi-device.
              Understand basic design. Users Journey, ideation and Wireframing etc...
            </p>
          </div>
          <div className="px-4 py-2 flex space-x-4">
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Full Time
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Min 1 Year
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Director
            </button>
          </div>
          <div className="flex p-4">
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover"
              src="https://imagenes.eltiempo.com/files/image_1200_600/files/fp/uploads/2024/03/19/65f9d492598ea.r_d.1079-279-5658.jpeg" alt="Laura" />
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover ml-[-6px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3HBG7VE4Vj7zQVcxw8rM-rgpLAUWVIpQw3w&s" alt="Carlos" />
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover ml-[-6px]"
              src="https://pymstatic.com/5844/conversions/personas-emocionales-wide_webp.webp" alt="Sara" />
            <div className="flex h-6 w-6 items-center justify-center rounded-full  border-gray-400
      bg-[#f5f2f2] object-cover ml-[-6px] text-sm text-gray-600 ">
              <span>+2</span>
            </div>
            <div className="text-center my-8">
              <h2 className="text-gray-400 font-bold px-6 py-4 flex space-x-4">
                5 Friends Work Here</h2></div>
          </div>
          <div className="flex px-4 space-x-8">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-7 rounded">
              Apply now
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#5e5c5c] font-bold py-2 px-7 rounded">
              Messages
            </button>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
          <img className="rounded-lg p-2 h-20 w-20"
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTTNoAgiu5vJsynDE21mnhHRGv0d5iKeegRpX-40snIyMXF-MnW" alt="icon8" />
          <div className="px-4 py-4">
            <div className="font-bold text-xl mb-2">UI / UX Designer - Remote</div>
            <p className="text-gray-700 text-base">
              You will be responsible for the visual design for multi-device.
              Understand basic design. Users Journey, ideation and Wireframing etc...
            </p>
          </div>
          <div className="px-4 py-2 flex space-x-4">
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Full Time
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Min 1 Year
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Director
            </button>
          </div>
          <div className="flex p-4">
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover"
              src="https://imagenes.eltiempo.com/files/image_1200_600/files/fp/uploads/2024/03/19/65f9d492598ea.r_d.1079-279-5658.jpeg" alt="Laura" />
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover ml-[-6px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3HBG7VE4Vj7zQVcxw8rM-rgpLAUWVIpQw3w&s" alt="Carlos" />
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover ml-[-6px]"
              src="https://pymstatic.com/5844/conversions/personas-emocionales-wide_webp.webp" alt="Sara" />
            <div className="flex h-6 w-6 items-center justify-center rounded-full  border-gray-400
      bg-[#f5f2f2] object-cover ml-[-6px] text-sm text-gray-600 ">
              <span>+2</span>
            </div>
            <div className="text-center my-8">
              <h2 className="text-gray-400 font-bold px-6 py-4 flex space-x-4">
                5 Friends Work Here</h2></div>
          </div>
          <div className="flex px-4 space-x-8">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-7 rounded">
              Apply now
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#5e5c5c] font-bold py-2 px-7 rounded">
              Messages
            </button>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
          <img className="rounded-lg p-2 h-20 w-20"
            src="https://cdn-icons-png.flaticon.com/512/124/124037.png" alt="icon9" />
          <div className="px-4 py-4">
            <div className="font-bold text-xl mb-2">Lead Product Desing</div>
            <p className="text-gray-700 text-base">
              You will be responsible for the visual design for multi-device.
              Understand basic design. Users Journey, ideation and Wireframing etc...
            </p>
          </div>
          <div className="px-4 py-2 flex space-x-4">
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Full Time
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Min 1 Year
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#7e7e7e] font-bold py-2 px-2 rounded-lg">
              Director
            </button>
          </div>
          <div className="flex p-4">
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover"
              src="https://imagenes.eltiempo.com/files/image_1200_600/files/fp/uploads/2024/03/19/65f9d492598ea.r_d.1079-279-5658.jpeg" alt="Laura" />
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover ml-[-6px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3HBG7VE4Vj7zQVcxw8rM-rgpLAUWVIpQw3w&s" alt="Carlos" />
            <img className="h-6 w-6 rounded-full border-[2px] border-gray-400 object-cover ml-[-6px]"
              src="https://pymstatic.com/5844/conversions/personas-emocionales-wide_webp.webp" alt="Sara" />
            <div className="flex h-6 w-6 items-center justify-center rounded-full  border-gray-400
      bg-[#f5f2f2] object-cover ml-[-6px] text-sm text-gray-600 ">
              <span>+2</span>
            </div>
            <div className="text-center my-8">
              <h2 className="text-gray-400 font-bold px-6 py-4 flex space-x-4">
                5 Friends Work Here</h2></div>
          </div>
          <div className="flex px-4 space-x-8">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-7 rounded">
              Apply now
            </button>
            <button className="bg-[#e2e2e2] hover:bg-[#c4c1c1] text-[#5e5c5c] font-bold py-2 px-7 rounded">
              Messages
            </button>
          </div>
        </div> */}

      </div>


    </section>

  )
}