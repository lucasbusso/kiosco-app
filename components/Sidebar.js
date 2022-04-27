import Image from "next/image"
import useKiosco from "../hooks/useKiosco"
import Categoria from "./Categoria"

const Sidebar = () => {
    const { categorias } = useKiosco()
  return (
   <>
        <Image 
            width={380} 
            height={100} 
            src="/assets/img/logo.svg" 
            alt="logotipo" 
        />

        <nav className="mt-10">
          {categorias.map( categoria => (
            <Categoria 
              key={categoria.id}
              categoria={categoria}
            />

          ))}
        </nav>
   </>
  )
}

export default Sidebar