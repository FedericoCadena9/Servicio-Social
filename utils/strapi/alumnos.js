import axios from "./authStrapi";
import qs from "qs";

//URL de la API
export const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

const strapiApiKey = `${process.env.STRAPI_API_KEY}`;

//Obtener todos los alumnos
export const getAlumnos = async ({ page, pageCount }) => {
  const query = qs.stringify({
    pagination: {
      page,
      pageCount,
    },
    populate: ["dependencia"],
  });

  const { data } = await axios.get(`${apiUrl}/alumnos?${query}`, {
    headers: { "Accept-Encoding": "gzip,deflate,compress" },
  });

  return data;
};

//Obtener la matricula de los alumnos
export const getAlumnosSlugs = async () => {
  const query = qs.stringify(
    {
      fields: ["slug"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await axios.get(`${apiUrl}/alumnos?${query}`, {
    headers: { "Accept-Encoding": "gzip,deflate,compress" },
  });

  const data = res.data.data;
  const slugs = data.map((alumno) => alumno.attributes.slug);

  return slugs;
};

//Obtener un alumno por su matricula
export const getAlumnoBySlug = async (slug) => {
  const query = qs.stringify(
    {
      filters: {
        matricula: {
          $eq: slug,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  console.log(query);

  const { data } = await axios.get(`${apiUrl}/alumnos?${query}`, {
    headers: { "Accept-Encoding": "gzip,deflate,compress" },
  });

  return data.data[0];
};

// Agregar Alumno
export const addAlumno = async (values) => {
  const response = await fetch(`${apiUrl}/alumnos`, {
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
    console.log("Alumno creado");
  }
};

// Editar Alumno
export const editAlumno = async (id, values) => {
  const response = await fetch(`${apiUrl}/alumnos/${id}`, {
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
    console.log("Alumno editado");
  }
};

// Eliminar Alumno
export const deleteAlumno = async (id) => {
  const response = await fetch(`${apiUrl}/alumnos/${id}`, {
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

// Filtros de busqueda
export const searchAlumnos = async (query) => {
  const strapiQuery = {
    filters: {},
  };

  //Boleanos
  if (query.presentaVerano)
    strapiQuery["filters"]["presentaVerano"] = { $eq: true };

  const strapiQueryString = qs.stringify(strapiQuery, {
    encodeValuesOnly: true,
  });
  const { data } = await axios.get(`${apiUrl}/alumnos?${strapiQueryString}`, {
    headers: { "Accept-Encoding": "gzip,deflate,compress" },
  });

  return data;
};
