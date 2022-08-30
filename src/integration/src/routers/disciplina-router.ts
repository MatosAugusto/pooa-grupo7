import express from 'express'

const disciplinaRouter = express.Router()
disciplinaRouter.post('/disciplina', (req, res) => {
    res.send('Cria nova disciplina')
})
disciplinaRouter.get('/disciplina', (req, res) => {
    res.send('Lê todas as disciplinas')
})
disciplinaRouter.get('/disciplina/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Lê a disciplina ${id}`)
})
disciplinaRouter.put('/disciplina/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Atualiza a disciplina ${id}`)
})
disciplinaRouter.delete('/disciplina/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Apaga a disciplina ${id}`)
})
export default disciplinaRouter