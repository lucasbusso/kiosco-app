import { useEffect, useCallback } from "react"
import Layout from "../layout/Layout"
import useKiosco from "../hooks/useKiosco"

export default function Total() {

    const { pedido } = useKiosco()

    const comprobarPedido = useCallback(() => {
        return pedido.length === 0
    }, [pedido])

    useEffect(() =>{
        comprobarPedido()
    }, [pedido, comprobarPedido])

    const colocarOrden = (e) => {
        e.preventDefault()
    }

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
                    >
                    </input>
                </div>
                <div
                    className="mt-10"
                >
                    <p className="text-2xl">
                        Total a pagar: {''} <span className="font-bold">$200</span>
                    </p>
                </div>
                <div
                    className="mt-5"
                >
                    <input
                        type="submit"
                        className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600'}  w-full lg:w-auto px-5 py-2 rounded-md uppercase font-bold text-white text-center`}
                        value="Confirmar pedido"
                        disabled={comprobarPedido()}
                    >
                    </input>
                </div>
            </form>
        </Layout>
)}