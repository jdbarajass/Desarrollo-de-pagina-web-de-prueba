import React from 'react'
import { PrismaClient } from '.prisma/client'
// me deja hacer querys o peticiones desde el front de manera segura por medio de nextjs data fetching
const prisma = new PrismaClient();
export async function getServerSideProps() {
    // este es un codigo servidor porque el console se ve en la terminal de vs
    // basicamente sirve para compartir informacion del backEnd al frontEnd
    // antes de cargar mi pagina puedo ejecutar esta funcion de getserversideprops
    const miVariable = "Hola Serverside props"
    console.log("Mi variable",miVariable)
    return {
        props: {miVariable},
    }
}
const Productos = ({ miVariable}) => {
    console.log("Esta es la variable en el front", miVariable)
    return (
        <div>
            Estos son mis productos:
            <div>Tabla productos</div>
        </div>
    )
}

export default Productos
