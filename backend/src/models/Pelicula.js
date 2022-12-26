import { Schema, model } from "mongoose"
const peliculaSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    calificacion: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    actores: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    duracion: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }

},
    {
        timestamps: false
    })


export default model('Pelicula', peliculaSchema)