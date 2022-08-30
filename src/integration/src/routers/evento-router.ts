import express from 'express'

const eventoRouter = express.Router()
eventoRouter.post('/evento', (req, res) => {
    res.send('Cria novo evento')
})
eventoRouter.get('/evento', (req, res) => {
    res.send('Lê todos os eventos')
})
eventoRouter.get('/evento/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Lê o evento ${id}`)
})
eventoRouter.put('/evento/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Atualiza o evento ${id}`)
})
eventoRouter.delete('/evento/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Apaga o evento ${id}`)
})
export default eventoRouter