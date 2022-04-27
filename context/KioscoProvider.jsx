import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const KioscoContext = createContext()

const KioscoProvider = ({children}) => {

    const [ categorias, setCategorias ] = useState([])
    const [ categoriaActual, setCategoriaActual ] = useState({})

    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias')
        setCategorias(data)
    }
    
    useEffect( () => {
        obtenerCategorias()
    }, [])

    const handleClickCategoria = id => {
        const categoria = categorias.filter( cat => cat.id === id)
        setCategoriaActual(categoria[0])
    }
    return(
        <KioscoContext.Provider
            value={{
                categorias,
                handleClickCategoria,
                categoriaActual
            }}
        >
            {children}
        </KioscoContext.Provider>
    )
}

export{
    KioscoProvider
}

export default KioscoContext