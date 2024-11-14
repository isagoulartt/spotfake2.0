import Express from "express";
import { lista, excluir, registra} from '../controlador/controlador_usuario'

const rota = Express.Router()

rota.get('/lista', lista)
rota.get('/:id', excluir)
rota.get('/:id', registra)

export {rota}