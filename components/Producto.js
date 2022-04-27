import Image from "next/image"

const Producto = ({producto}) => {
    const { nombre, imagen, precio } = producto
  return (
    <div className="border p-3">
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
        </div>
    </div>
  )
}

export default Producto