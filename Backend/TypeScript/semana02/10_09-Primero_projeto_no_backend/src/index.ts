import 'dotenv/config'
import express from 'express'
import rotas from './routes/rotas'

const app = express()

app.use(express.json())
app.use(rotas)

app.listen('3000', () => {
    console.log('Servidor iniciado na porta 3000')
})