import { categorias } from './data/categorias'
import { productos } from "./data/productos";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const main = async () : Promise<void> => {
    try {
        await prisma.categoria.createMany({  //es el modelo pero con minuscula, prisma tiene CRUD, con este metodo creo elementos en 
            data: categorias                 //agrega las 6 categorias del categorias.ts 
        })   
        await prisma.producto.createMany({  //es el modelo pero con minuscula, prisma tiene CRUD, con este metodo creo elementos en 
            data: productos                 //agrega las 6 categorias del categorias.ts 
        })   
    } catch (error) {
        console.log(error)
    }
}

main()
