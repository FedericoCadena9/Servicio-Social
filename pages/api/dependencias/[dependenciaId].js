// Endpoint de la conexión a la base de datos para traer los datos a NextJS
import connectMongo from "database/conn";

//Importar Controlador de Dependencias
import {
  getDependencia,
  putDependencia,
  deleteDependencia,
} from "controllers/dependenciaController";

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
      getDependencia(req, res);
      break;
    case "PUT":
      // Respuesta de la API
      putDependencia(req, res);
      break;
    case "DELETE":
      // Respuesta de la API
      deleteDependencia(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Metodo ${method} no permitido`);
      break;
  }
}
