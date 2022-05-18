import { useEffect, useCallback } from "react"
import Layout from "../layout/Layout"
import useKiosco from "../hooks/useKiosco"
import { formatearDinero } from "../helpers"

export default function Total() {

    const { pedido, nombre, setNombre, colocarOrden, total } = useKiosco()

    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === "" || nombre.length < 3
    }, [pedido, nombre])

    useEffect(() =>{
        comprobarPedido()
    }, [pedido, comprobarPedido])

    

    return (
        <Layout pagina="Resumen">
            <h1 className="text-4xl font-black">
                Total del pedido
            </h1>
            <p className="text-2xl my-10">
                Confirma tu pedido a continuación
            </p>

            <form
                onSubmit={colocarOrden}
            >
                <div>
                    <label
                        htmlFor="nombre"
                        className="block uppercase text-slate-700 font-bold textl-xl"
                    >
                        Nombre
                    </label>
                    <input
                        id="nombre"
                        type="text"
                        className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)} //le paso el nombre que se introduzca al estado
                    >
                    </input>
                </div>
                <div
                    className="mt-10"
                >
                    <p className="text-2xl">
                        Total a pagar: {''} <span className="font-bold">{formatearDinero(total)}</span>
                    </p>
                </div>
                <div
                    className="mt-5"
                >
                    <input
                        type="submit"
                        className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600'} hover:cursor-pointer w-full lg:w-auto px-5 py-2 rounded-md uppercase font-bold text-white text-center`}
                        value="Confirmar pedido"
                        disabled={comprobarPedido()}
                    >
                    </input>
                </div>
            </form>
        </Layout>
)}