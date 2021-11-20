import express from 'express'
import indexController from '../controllers/index'
const router = express.Router()

router.use(function timelog(req, res, next){
  console.log('Entrada a las: ', Date.now())
  next()
})

router.get('/', indexController.index)

router.get('/client', indexController.client)

// router.get('/', (req, res) => {
//   //res.send('Holoooooo, humano imberbe!!!!!')
//   res.render('index', { svg: 'app-funcionalidad' })
// })

export default router