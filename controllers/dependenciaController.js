//Modelo de la Colleccion
import Dependencias  from "model/dependencia";

//GET http://localhost:3000/api/dependencias
export async function getDependencias(req, res) {
  try {
    // Constante que buscara todos los datos de la base de datos
    const dependencias = await Dependencias.find({});

    //Condicional para verificar si hay datos en la base de datos
    if (!dependencias)
      return res.status(404).json({ error: "No se encontraron Dependencias" });
    res.status(200).json(dependencias);
  } catch (error) {
    //Error en caso de que no se pueda hacer la consulta
    res.status(404).json({ error: "Error al hacer Fetch en la Consulta" });
  }
}

// GET http://localhost:3000/api/dependencias/:id
export async function getDependencia(req, res) {
  try {
    const { dependenciaId } = req.query;

    if (dependenciaId) {
      const dependencia = await Dependencias.findById(dependenciaId);
      res.status(200).json(dependencia);
    }
    res.status(404).json({ error: "Dependencia no Seleccionada." });
  } catch (error) {
    res.status(404).json({ error: "No pudimos encontrar a esa Dependencia" });
  }
}

//POST http://localhost:3000/api/dependencias
export async function postDependencia(req, res) {
  try {
    // Constante que guardara los datos que se envien desde el front
    const formData = req.body;

    //Condicionales para verificar que los datos no esten vacios
    if (!formData)
      return res.status(404).json({ error: "No se encontraron datos" });

    //Creación del objeto con los datos que se enviaran a la base de datos
    Dependencias.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    //Error en caso de que no se pueda hacer la consulta
    res.status(404).json({ error: error.message });
  }
}

//PUT http://localhost:3000/api/dependencias/:id
export async function putDependencia(req, res) {
  try {
    //Constante que guardará el id que se consulte para la actualización
    const { dependenciaId } = req.query;
    // Constante que guardara los nuevos datos que se envien desde el front
    const formData = req.body;

    //Condición que verifica que el id exista y que los datos no esten vacios
    if (dependenciaId && formData) {
      //Actualización de los datos en la base de datos con el id y los datos que se envian
      const dependencia = await Dependencias.findByIdAndUpdate(
        dependenciaId,
        formData,
        { new: true }
      );
      res.status(200).json(dependencia);
    }

    // Error en caso de que no se encuentre el id
    res.status(404).json({ error: "Dependencia no Seleccionada" });
  } catch (error) {
    //Error en caso de que no se pueda hacer la consulta
    res.status(404).json({ error: "Error mientras se actualizaban los datos" });
  }
}

//DELETE http://localhost:3000/api/dependencias/:id
export async function deleteDependencia(req, res) {
  try {
    //Constante que guardará el id que se consulte para la eliminación
    const { dependenciaId } = req.query;

    //Condición que verifica que el id exista
    if (dependenciaId) {
      //Eliminación de los datos en la base de datos con el id
      const dependencia = await Dependencias.findByIdAndDelete(dependenciaId);
      res.status(200).json({ deleted: dependenciaId });
    }

    // Error en caso de que no se encuentre el id
    res.status(404).json({ error: "Dependencia no Seleccionada" });
  } catch (error) {
    //Error en caso de que no se pueda hacer la consulta
    res
      .status(404)
      .json({ error: "Error mientras se eliminaba la Dependencia" });
  }
}
