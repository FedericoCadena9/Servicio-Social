//Importación de Mongoose
import mongoose from 'mongoose';

// Función para conectar a la base de datos
const connectMongo = async () => {
    try {
        
        // Conexión a la base de datos a través de Mongoose con MongoDB Atlas
        const { connection } = await mongoose.connect(process.env.MONGO_URI);

        // Condición para verificar si la conexión fue exitosa
        if(connection.readyState === 1){
            console.log('Base de Datos conectada');
        }

    } catch (error) {

        // En caso de error, se muestra en consola
        return Promise.reject("error");
    }
}

export default connectMongo;