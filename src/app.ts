import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import router from './routes/index'

dotenv.config()

const app: express.Application = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", 'ejs')

app.use(express.static('public'))

app.get('/', router)
app.get('/client', router)

const port = process.env.SERVER_PORT
app.listen(port, () => {
  console.log(`App escuchando en el http://localhost:${port}, bípedo dominante!!`)
})