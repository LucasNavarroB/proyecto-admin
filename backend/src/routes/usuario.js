import { Router } from 'express'
import usuarioSchema from '../models/Usuario'
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from './../config'

const router = Router()

router.get('/', async (req, res) => {
    res.send("Endpoint de manejo de cuentas de los usuarios")
})
router.post('/iniciar-sesion', async (req, res) => {
    const userfind = await usuarioSchema.findOne({ nombre: req.body.nombre })
    if (userfind != undefined) {
        if (await userfind.matchPassword(req.body.contraseña)) {
            const token = await jwt.sign({ id: userfind._id }, SECRET_KEY)
            res.json({ message: "Inicio de sesion realizado satisfactoriamente", token: `Bearer ${token}` })
        } else {
            res.json({ message: "Contraseña incorrecta" })
        }
    } else {
        res.json({ message: "Por favor realice su registro" })
    }
})
router.post('/registrarse', async (req, res) => {
    if (req.body.nombre == undefined || req.body.contraseña == undefined) {
        res.json({ message: "Por favor ingrese todos los datos" })
    } else {
        const userfind = await usuarioSchema.findOne({ nombre: req.body.nombre })
        if (userfind == undefined) {
            const user = new usuarioSchema(req.body)
            user.contraseña = await user.encryptPassword(req.body.contraseña);
            const userSaved = await user.save().catch((error) => res.json({ message: error }))
            if (userSaved != undefined) {
                const token = await jwt.sign({ id: userSaved._id }, SECRET_KEY)
                console.log(`Bearer ${token}`)
                res.status(200).json({ message: "Registro realizado satisfactoriamente", token: `Bearer ${token}` })
            }

        } else {
            res.json({ message: "Ya existe un usuario asociado al nombre" })
        }
    }
})

module.exports = router
