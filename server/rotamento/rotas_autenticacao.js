import expresss  from 'express'
import {registro, login} from '../controlador/authControl.js'



const rotas = expresss.Router()

rotas.post('/registro', registro)

rotas.post('/login', login)

export{ rotas}