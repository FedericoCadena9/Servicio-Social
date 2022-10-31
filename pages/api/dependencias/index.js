// Endpoint de la conexión a la base de datos para traer los datos a NextJS
import connectMongo from "../../../database/conn";

//Importar Controlador de Dependencias
import { getDependencias } from "../../../database/controller";

export default async function handler(req, res) {
  // Conexión a la base de datos
  connectMongo().catch(() =>
    res.status(405).json({ message: "Error al conectar a la base de datos" })
  );

  //Tipos de request
  const { method } = req;

  // Switch para verificar el tipo de request
  switch (method) {
    case "GET":
      // Respuesta de la API
      getDependencias(req, res);
      break;
    case "POST":
      res.status(200).json({ method, message: "POST request" });
      break;
    case "PUT":
      res.status(200).json({ method, message: "PUT request" });
      break;
    case "DELETE":
      res.status(200).json({ method, message: "DELETE request" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Metodo ${method} no permitido`);
      break;
  }
}
