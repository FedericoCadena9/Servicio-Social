const usuarioSchema = new Schema({
    nombreUsuario: {
        type: String,
        required: [true, "El nombre del usuario es obligatorio"],
        trim: true
    },

    correoElectronico: {
        type: String,
        required: [true, "El correo electrónico es obligatorio"],
        unique: true,
        trim: true
    },

    rol: {
        type: String,
        required: true,
        trim: true
    },

    accion: Boolean,
});

const Usuarios = 
    models.usuarios || model("usuarios",usuarioSchema);
export default Usuarios;