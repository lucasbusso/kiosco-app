import Image from "next/image"
import useKiosco from "../hooks/useKiosco"
import { formatearDinero } from "../helpers"

const ModalProducto = () => {
  
    const { producto, handleChangeModal } = useKiosco()


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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 hover:bg-amber-500 hover:stroke-white rounded-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        </div>
    </div>
  )
}

export default ModalProducto