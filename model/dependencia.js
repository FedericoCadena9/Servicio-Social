import { Schema, models, model } from "mongoose";

const dependenciaSchema = new Schema(
  {
    nombrePrograma: {
      type: String,
      required: [true, "El nombre del programa es obligatorio"],
      trim: true,
    },

    clavePrograma: {
      type: String,
      default: "No especificado",
      unique: true,
      trim: true,
      maxLength: [
        40,
        "La clave del programa no puede tener más de 40 caracteres",
      ],
    },

    institucion: {
      type: String,
      required: [true, "El nombre de la institución es obligatorio"],
      trim: true,
    },

    objetivo: {
      type: String,
      required: [true, "El objetivo del programa es obligatorio"],
      trim: true,
    },

    actividades: {
      type: String,
      required: [true, "Las actividades del programa son obligatorias"],
      trim: true,
    },

    perfiles: [
      {
        type: String,
        required: [true, "El perfil del programa es obligatorio"],
        trim: true,
      },
    ],

    directorGeneral: {
      type: String,
      required: [true, "El nombre del director general es obligatorio"],
      trim: true,
    },

    responsableArea: {
      type: String,
      required: [true, "El nombre del responsable de área es obligatorio"],
      trim: true,
    },

    telefono: [
      {
        type: String,
        required: [true, "El teléfono es obligatorio"],
        trim: true,
        default: 0,
      },
    ],

    correo: [
      {
        type: String,
        required: [true, "El correo es obligatorio"],
        unique: false,
        trim: true,
      },
    ],

    domicilio: {
      type: String,
      required: [true, "El domicilio es obligatorio"],
      trim: true,
    },
    
    isVigente: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Dependencias =
  models.dependencia || model("dependencia", dependenciaSchema);
export default Dependencias;
