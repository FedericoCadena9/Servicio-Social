// Endpoint de la conexión a la base de datos para traer los datos a NextJS
import connectMongo from 'database/conn';

export default async function handler(req, res) {
    
        // Conexión a la base de datos
        connectMongo()
    
        // Respuesta de la API
        res.status(200).json({ name: 'John Doe' });
    }