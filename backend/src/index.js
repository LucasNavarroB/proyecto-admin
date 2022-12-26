import app from './app';
import express from 'express'
import http from 'http'
import rootRouter from './routes/index';
import usuarioRouter from './routes/usuario';
import peliculaRouter from './routes/pelicula'
import { connectDB } from './db'
import cors from 'cors'

connectDB()

const PORT = 5000
const server = http.createServer(app)
app.use(cors({origins: ['http://localhost:5000/']}))
app.use(express.json())
app.use('/',rootRouter)
app.use('/usuario',usuarioRouter)
app.use('/pelicula',peliculaRouter)
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({message:"Esa ruta no existe!"});
});

server.listen(PORT,()=>{
  console.log(`Servidor escuchando en puerto ${PORT}`);  
})
