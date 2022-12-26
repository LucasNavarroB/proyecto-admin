import { Schema, model } from "mongoose"
import bcrypt from 'bcryptjs'
import {SALT_ITERATION} from './../config'
const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    }

},
{
    timestamps: false
})

usuarioSchema.methods.encryptPassword = async ( contraseña ) => {
    const salt = await bcrypt.genSalt(parseInt(SALT_ITERATION));
    return await bcrypt.hash(contraseña, salt);
};

usuarioSchema.methods.matchPassword = async function (contraseña ) {
    return await bcrypt.compare(contraseña, this.contraseña);
};


export default model('Usuario', usuarioSchema)
