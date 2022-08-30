import express from 'express'

const localRouter = express.Router()
localRouter.post('/local', (req, res) => {
    res.send('Cria novo local')
})
localRouter.get('/local', (req, res) => {
    res.send('Lê todos os locais')
})
localRouter.get('/local/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Lê o local ${id}`)
})
localRouter.put('/local/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Atualiza o local ${id}`)
})
localRouter.delete('/local/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Apaga o local ${id}`)
})
export default localRouter