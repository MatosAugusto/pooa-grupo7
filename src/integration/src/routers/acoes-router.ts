import express from 'express'
import Acoes from '../models/acoes'

const acoesRouter = express.Router()
acoesRouter.post('/acoes', (req, res) => {
    res.send('Cria novo item')
})
acoesRouter.get('/acoes', (req, res) => {
    const acoes: Acoes[] = [
        {
            nome: 'Produto 1',
            codigo: '2'
        },
        {
            nome: 'Produto 2',
            codigo: '3'
        }
    ]
    res.json(acoes)
})
acoesRouter.get('/acoes/:id', (req, res) => {
    const id: number = +req.params.id
    const acoes: Acoes = {
        nome: `Produto ${id}`,
        codigo: `Codigo do produto ${id}`
    }
    res.json(acoes)
    //res.send(`Lê a acao ${id}`)
})
acoesRouter.put('/acoes/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Atualiza a acao ${id}`)
})
acoesRouter.delete('/acoes/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Apaga a acao ${id}`)
})
export default acoesRouter