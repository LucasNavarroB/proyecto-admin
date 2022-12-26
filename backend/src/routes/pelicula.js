import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send("Endpoint de manejo de peliculas")
})

module.exports = router