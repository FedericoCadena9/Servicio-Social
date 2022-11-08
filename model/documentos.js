const { model } = require("mongoose");

const documentoSchema = new Schema({
    nombreDocumento: {
        type: String,
        required: [true, "El nombre del documento es obligatorio"], 
        trim: true
    },
    descripcion: String,
    tamaño: Number,
    tipo: {
        type:String,
        require: [true, "El tipo de documento debe ser PDF"],
        trim: true
    }
},
{
    timestamps: true,
    versionKey: false,
}
);

const Documentos = 
    models.documentos || model("documentos",documentoSchema);
export default Documentos;