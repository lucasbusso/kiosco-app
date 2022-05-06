import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const KioscoContext = createContext()

const KioscoProvider = ({children}) => {

    const [ categorias, setCategorias ] = useState([])
    const [ categoriaActual, setCategoriaActual ] = useState({})
    const [ producto, setProducto ] = useState({})
    const [ modal, setModal ] = useState(false)
    const [ pedido, setPedido ] = useState([])

    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias')
        setCategorias(data)
    }
    
    useEffect( () => {
        obtenerCategorias()
    }, [])
    useEffect( () => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    const handleClickCategoria = id => {
        const categoria = categorias.filter( cat => cat.id === id)
        setCategoriaActual(categoria[0])
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    } 

    const handleChangeModal = () =>{
        setModal(!modal)
    }

    const handleAgregarPedido = ({categoriaId, imagen, ...producto}) => {

        if(pedido.some(productoState => productoState.id === producto.id)){ //reviso si el producto agregado es repetido
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
            setPedido(pedidoActualizado) //si es repetido, retorno el pedido actualizado
        } else {  
            setPedido([...pedido, producto]) //si el producto no estaba agregado, lo agrego al estado
        }
        setModal(false)
    }

    return(
        <KioscoContext.Provider
            value={{
                categorias,
                handleClickCategoria,
                categoriaActual,
                producto,
                handleSetProducto,
                handleChangeModal,
                modal,
                handleAgregarPedido,
                pedido
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