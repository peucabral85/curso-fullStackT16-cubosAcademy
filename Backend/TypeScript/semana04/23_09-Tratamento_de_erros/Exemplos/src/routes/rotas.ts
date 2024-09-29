import { Router } from 'express'
import { criarUsuario } from '../controllers/usuarioController'

const rotas = Router()

rotas.post('/', criarUsuario)

export default rotas