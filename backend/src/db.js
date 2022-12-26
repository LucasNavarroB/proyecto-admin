import { connect } from 'mongoose'
import {MONGODB_URI} from './config'

export const connectDB = async () => {
    try {
        await connect(MONGODB_URI)
        console.log("Conectado a la Base de datos")
    } catch (error) {
        console.error(error)
    }
}