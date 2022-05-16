import Layout from "../layout/Layout"
import useKiosco from "../hooks/useKiosco"
import ResumenProducto from "../components/ResumenProducto"

export default function Resumen() {

    const { pedido } = useKiosco()
    return (
        <Layout pagina="Resumen">
            <h1 className="text-4xl font-black">
                Resumen
            </h1>
            <p className="text-2xl my-10">
                Controlá tu pedido 
            </p>
            {pedido.length === 0 ? (
                <p className="text-center text-2xl">Aún no agregaste nada en tu pedido</p>
            ) : pedido.map(producto => (
                <ResumenProducto
                    key={producto.id}
                    producto={producto}
                />
            ))}
        </Layout>
    )
}
