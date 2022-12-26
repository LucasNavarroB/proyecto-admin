import {SECRET_KEY} from './../config'
import jwt from 'jsonwebtoken'

export const ensureToken = async (req, res, next)=>{
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ")
        const bearerToken = bearer[1]
        req.token = bearerToken
        
        const token = await jwt.verify(req.token,SECRET_KEY,(err,data)=>{
            if(err){
                res.status(403).json({message: "Acceso no autorizado"})
            }else{
                req.body.id = data.id
                next()
            }
        })
        

    }else{
        res.status(403).json({message: "Acceso no autorizado"})
    }
}