import { useState } from "react"
import Image from "next/image"
import useKiosco from "../hooks/useKiosco"
import { formatearDinero } from "../helpers"

const ModalProducto = () => {
    const [ cantidad, setCantidad ] = useState(1)
    const { producto, handleChangeModal, handleAgregarPedido } = useKiosco()


    return (
    <div className="md:flex gap-10">

        <div className="md:w-1/3">
            <Image
                width={300}
                height={400}
                alt={`imagen producto ${producto.nombre}`}
                src={`/assets/img/${producto.imagen}.jpg`}
            />
        </div>

        <div className="md:w-2/3">
            <div className="flex justify-end">
                <button
                    onClick={handleChangeModal}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 hover:bg-indigo-500 hover:stroke-white hover:shadow-md rounded-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <h1 className="text-3xl font-bold mt-5">
                {producto.nombre}
            </h1>
            <p className="mt-5 font-black text-5xl text-amber-600">
                {formatearDinero(producto.precio)}
            </p>
            <div className="flex gap-4 mt-7 w-full justify-center">
                <button
                    type="button"
                    onClick={()=>{
                        if(cantidad <= 1) return;
                        setCantidad(cantidad -1)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 fill-gray-700 hover:fill-gray-800" viewBox="0 0 20 20" >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>                
                </button>
                <p className="text-4xl mb-1 font-semibold">{cantidad}</p>
                <button
                    type="button"
                    onClick={()=>{
                        if(cantidad >= 5) return;
                        setCantidad(cantidad + 1)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 fill-gray-700 hover:fill-gray-800" viewBox="0 0 20 20" >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            <button
                type="button"
                className="bg-indigo-600 hover:bg-indigo-800 w-full py-3 mt-8 shadow-md text-white font-bold uppercase rounded-md"
                onClick={ () => handleAgregarPedido({...producto, cantidad})}
            >
                Agregar 
            </button>
        </div>
    </div>
  )
}

export default ModalProducto