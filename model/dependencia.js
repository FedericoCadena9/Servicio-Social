import { Schema, models, model } from "mongoose"

const dependenciaSchema = new Schema({
  nombrePrograma: String,
  clavePrograma: String,
  institucion: String,
  objetivo: String,
  actividades: String,
  perfiles: String,
  directorGeneral: String,
  responsableArea: String,
  telefono: String,
  correo: String,
  domicilio: String,
})

const Dependencias = models.dependencia || model('dependencia', dependenciaSchema)
export default Dependencias;
