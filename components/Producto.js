import Image from "next/image"
import { formatearDinero } from "../helpers"

const Producto = ({producto}) => {
    const { nombre, imagen, precio } = producto
  return (
    <div className="hover:bg-amber-50 hover:shadow-md p-3">
        <Image 
            src={`/assets/img/${imagen}.jpg`}
            alt={`Imagen ${nombre}`}
            width={400}
            height={500}
        />
        <div className="p-5">
            <h3 className="text-2xl font-bold">
                {nombre}
            </h3>
            <p className="mt-5 font-black text-4xl text-amber-500">
                { formatearDinero(precio) }
            </p>

            <button 
                type="button"
                className="bg-rose-400 hover:bg-rose-500 text-white w-full mt-5 p-3 uppercase font-bold shadow-md"
                onClick={() =>}
            >
                Agregar
            </button>
        </div>
    </div>
  )
}

export default Producto