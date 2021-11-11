import type { NextApiRequest, NextApiResponse 
} from "next"
import { PrismaClient } from ".prisma/client";
const prisma = new PrismaClient();
// se esta creando una instancia de prismaclient y el prisma ya me deja hacer consultas
const RutaApiProductos = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
      console.log("Hice un get");
      const productos = await prisma.producto.findMany({ include: {inventario:true}});
      // el findMany es para encontrar todos los productos que estan en la base de datos
      // el include agrega el inventario en ese json de respuesta
  res.status(200).json({"Productos":"Hola"})
  }
};
export default RutaApiProductos