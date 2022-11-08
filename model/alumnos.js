const { model } = require("mongoose");

const alumnosSchema = new Schema(
    {
        
        matricula: {
            type: Number,
            unique: true,
            trim: true,
            maxLength: [
                8,
                "La matricula no puede tener más de 8 caracteres",
            ]
        },

        apellidoPaterno: {
            type: String,
            required: [true, "El apellido parerno es obligatorio"],
            trim: true
        },
        
        apellidoMaterno: {
            type: String,
            required: [true, "El apellido materno es obligatorio"],
            trim: true 
        },
        
        

        genero: {
            type: String,
            required: [true, "El genero es obligatorio"]
        },

        edad: {
            type: Number,
            min: 18,
            max: 65,
            required:[true, "La edad es obligatoria"],
            trim: true
        },

        numero: {
            type: Number,
            unique: true,
            required:[true, "El número telefónico es obligatorio"],
            trim: true,
            maxLength: [
                10,
                "El número telefónico no puede tener más de 10 caracteres",
            ]
        },
        
        correo: {
            type: String,
            required: [true, "El correo electrónico es obligatorio"],
            unique: true,
            trim: true
        },

        comunidad: {
            type: String,
            required: [true, "La comunidad es obligatoria"]
        },

        discapacidad: {
            type: String,
            trim:true,
        },

        lenguaIndigena: {
            type: String,
            trim:true,
        },
        
        modalidad:{
            type: String,
            required: [true, "La modalidad es obligatoria"],
            trim: true
        },

        semestre: {
            type: Number,
            min: 1,
            max: 12,
            required: [true, "El semestre es obligatorio"],
            trim: true
        },

        carrera: {
            type: String,
            required: [true, "El nombre de la carrera es obligatorio"],
            trim: true
        },

        presentaVerano: {
            type: Boolean,
            required: true,
            trim: true
        },

        creditos: {
            type: Number,
            min: 1,
            max: 190,
            required: [true,"La cantidad de creditos es obligatoria"],
            trim: true
        },

        accion: Boolean,
    }
);

const Alumnos = 
    models.alumnos || model("alumnos",alumnosSchema);
export default Alumnos;