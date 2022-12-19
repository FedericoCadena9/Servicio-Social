import axios from "./authStrapi";
import qs from "qs";

//URL de la API
export const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

const strapiApiKey = `${process.env.STRAPI_API_KEY}`;

//Obtener todos los usuarios
export const getUsers = async () => {
  const { data } = await axios.get(`${apiUrl}/usuarios`, {
    headers: { "Accept-Encoding": "gzip,deflate,compress" },
  });

  return data.data;
};

// Agregar Usuario
export const addUser = async (values) => {
  const response = await fetch(`${apiUrl}/usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${strapiApiKey}`,
    },
    body: JSON.stringify({ data: values }),
  });

  if (!response.ok) {
    console.log("Error al crear");
  } else {
    console.log("Usuario agregado");
  }
};

// Eliminar Alumno
export const deleteUser = async (id) => {
  const response = await fetch(`${apiUrl}/usuarios/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json;",
      Authorization: `Bearer ${strapiApiKey}`,
    },
  });

  if (!response.ok) {
    console.log("Error al eliminar");
  } else {
    console.log("Eliminado");
  }
};
