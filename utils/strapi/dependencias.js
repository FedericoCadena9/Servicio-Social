import axios from "./authStrapi";
import qs from "qs";

//URL de la API
export const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

const strapiApiKey = `${process.env.STRAPI_API_KEY}`;

//Obtener todos las dependencias
export const getDependencias = async ({ page, pageCount }) => {
  const query = qs.stringify({
    pagination: {
      page,
      pageCount,
    },
  });

  const { data } = await axios.get(`${apiUrl}/dependencias?${query}`, {
    headers: { "Accept-Encoding": "gzip,deflate,compress" },
  });

  return data;
};

//Obtener la clave de las dependencias
export const getDependenciasSlugs = async () => {
  const query = qs.stringify(
    {
      fields: ["clavePrograma"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await axios.get(`${apiUrl}/dependencias?${query}`, {
    headers: { "Accept-Encoding": "gzip,deflate,compress" },
  });

  const data = res.data.data;
  const slugs = data.map((dependencia) => alumno.attributes.clavePrograma);

  return slugs;
};

//Obtener un alumno por su matricula
export const getDependenciaBySlug = async (slug) => {
  const query = qs.stringify(
    {
      filters: {
        clavePrograma: {
          $eq: slug,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const { data } = await axios.get(`${apiUrl}/dependencias?${query}`, {
    headers: { "Accept-Encoding": "gzip,deflate,compress" },
  });

  return data.data[0];
};

// Agregar Dependencia
export const addDependencia = async (values) => {
  const response = await fetch(`${apiUrl}/dependencias`, {
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
    console.log("Dependencia creada");
  }
};

// Editar Dependencia
export const editDependencia = async (id, values) => {
    const response = await fetch(`${apiUrl}/dependencias/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${strapiApiKey}`,
      },
      body: JSON.stringify({ data: values }),
    });
  
    if (!response.ok) {
      console.log("Error al editar");
    } else {
      console.log("Dependencia editada");
    }
  };

  // Eliminar Dependencia
export const deleteDependencia= async (id) => {
    const response = await fetch(`${apiUrl}/dependencias/${id}`, {
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
  