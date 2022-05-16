import Image from "next/image"
import { formatearDinero } from "../helpers"

const ResumenProducto = ({producto}) => {
  return (
    <div className="shadow p-5 mb-3 flex gap-10 bg-gray-50">
        <div className="md:w-1/6">
            <Image 
                width={300}
                height={400}
                alt={`Imagen producto ${producto.nombre}`}
                src={`/assets/img/${producto.imagen}.jpg`}
            />
        </div>
        <div className="md:w-5/6">
            <p className="text-3xl font-black mt-5">{producto.nombre}</p>
            <p className="text-xl text-gray-700 font-bold mt-6">Cantidad: {producto.cantidad}</p>
            <p className="text-xl text-gray-700 font-bold mt-2">Precio (unidad): {formatearDinero(producto.precio)}</p>
            <p className="text-l text-gray-700 font-bold mt-6">Subtotal: {formatearDinero(producto.precio * producto.cantidad)}</p>
        </div>
    </div>
  )
}

export default ResumenProducto