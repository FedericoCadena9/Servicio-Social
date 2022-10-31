//Controller
import Dependencias from "../model/dependencia";

export async function getDependencias(req, res) {
  try {
    const dependencias = await Dependencias.find({})

    if (!dependencias) return res.status(404).json({ error: "No se encontraron Dependencias" });
    res.status(200).json(dependencias);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}
