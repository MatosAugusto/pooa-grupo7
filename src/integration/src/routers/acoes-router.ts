import express from 'express'

const acoesRouter = express.Router()
acoesRouter.post('/acoes', (req, res) => {
    res.send('Cria novo item')
})
acoesRouter.get('/acoes', (req, res) => {
    res.send('Lê todos as acoes')
})
acoesRouter.get('/acoes/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Lê a acao ${id}`)
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