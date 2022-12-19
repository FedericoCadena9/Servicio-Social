import axios from "axios";

// Conseguimos la variable de entorno de nuestro API Token de Strapi
const strapiApiKey = process.env.STRAPI_API_KEY;
// Accedemos con un tipo de autenticación Bearer	
axios.defaults.headers.common["Authorization"] = `Bearer ${strapiApiKey}`;

export default axios;