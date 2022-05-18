import { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const KioscoContext = createContext()

const KioscoProvider = ({children}) => {

    const [ categorias, setCategorias ] = useState([])
    const [ categoriaActual, setCategoriaActual ] = useState({})
    const [ producto, setProducto ] = useState({})
    const [ modal, setModal ] = useState(false)
    const [ pedido, setPedido ] = useState([])

    const router = useRouter()

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
        router.push('/')
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    } 

    const handleChangeModal = () =>{
        setModal(!modal)
    }
    
    const handleAgregarPedido = ({categoriaId, ...producto}) => {

        if(pedido.some(productoState => productoState.id === producto.id)){ //reviso si el producto agregado es repetido
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
            setPedido(pedidoActualizado) //si es repetido, retorno el pedido actualizado
            toast.success("Cambios guardados") //cuando editas cantidad

        } else {  
            setPedido([...pedido, producto]) //si el producto no estaba agregado, lo agrego al estado
            toast.success("Producto agregado") //cuando agregas
        }
        setModal(false)
    }

    const handleEditarCantidades = (id) => {
        const pedidoActualizado = pedido.filter( producto => producto.id === id)
        setProducto(pedidoActualizado[0]);
        setModal(!modal)
    }

    const handleEliminarProducto = id => {
        const pedidoActualizado = pedido.filter( producto => producto.id !== id)

        setPedido(pedidoActualizado)
    }

    return (
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
          pedido,
          handleEditarCantidades,
          handleEliminarProducto
        }}
      >
        {children}
      </KioscoContext.Provider>
    );
}

export{
    KioscoProvider
}

export default KioscoContext