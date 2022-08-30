import express from 'express'

const usuarioRouter = express.Router()
usuarioRouter.post('/usuario', (req, res) => {
    res.send('Cria novo usuario')
})
usuarioRouter.get('/usuario', (req, res) => {
    res.send('Lê todos os usuarios')
})
usuarioRouter.get('/usuario/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Lê o usuario ${id}`)
})
usuarioRouter.put('/usuario/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Atualiza o usuario ${id}`)
})
usuarioRouter.delete('/usuario/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Apaga o usuario ${id}`)
})
export default usuarioRouter