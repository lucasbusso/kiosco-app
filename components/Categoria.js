import Image from "next/image"
import useKiosco from "../hooks/useKiosco"

const Categoria = ({categoria}) => {

  const { categoriaActual, handleClickCategoria } = useKiosco()
  const { nombre, icono, id } = categoria


  return (
    <div className={`${categoriaActual?.id === id ? "bg-amber-400 text-amber-50" : ""} 
                   flex items-center gap-6 w-full border p-5 hover:bg-amber-400`}>
      <Image 
        width={70}
        height={70}
        src={`/assets/img/icono_${icono}.svg`}
        alt="Imagen icono"
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer p-4 w-full flex flex-initial"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  )
}

export default Categoria