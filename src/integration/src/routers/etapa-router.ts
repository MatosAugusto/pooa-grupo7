import express from 'express'

const etapaRouter = express.Router()
etapaRouter.post('/etapa', (req, res) => {
    res.send('Cria nova etapa')
})
etapaRouter.get('/etapa', (req, res) => {
    res.send('Lê todas as etapas')
})
etapaRouter.get('/etapa/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Lê a etapa ${id}`)
})
etapaRouter.put('/etapa/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Atualiza a etapa ${id}`)
})
etapaRouter.delete('/etapa/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Apaga a etapa ${id}`)
})
export default etapaRouter