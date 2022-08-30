import express from 'express'

const departamentoRouter = express.Router()
departamentoRouter.post('/departamento', (req, res) => {
    res.send('Cria novo departamento')
})
departamentoRouter.get('/departamento', (req, res) => {
    res.send('Lê todos os departamentos')
})
departamentoRouter.get('/departamento/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Lê o departamento ${id}`)
})
departamentoRouter.put('/departamento/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Atualiza o departamento ${id}`)
})
departamentoRouter.delete('/departamento/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Apaga o departamento ${id}`)
})
export default departamentoRouter