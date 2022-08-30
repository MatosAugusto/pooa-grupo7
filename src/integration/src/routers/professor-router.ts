import express from 'express'

const professorRouter = express.Router()
professorRouter.post('/professor', (req, res) => {
    res.send('Cria novo professor')
})
professorRouter.get('/professor', (req, res) => {
    res.send('Lê todos os professores')
})
professorRouter.get('/professor/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Lê o professor ${id}`)
})
professorRouter.put('/professor/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Atualiza o professor ${id}`)
})
professorRouter.delete('/professor/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Apaga o professor ${id}`)
})
export default professorRouter