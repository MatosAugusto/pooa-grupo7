import express from 'express'

const alunoRouter = express.Router()
alunoRouter.post('/aluno', (req, res) => {
    res.send('Cria novo aluno')
})
alunoRouter.get('/aluno', (req, res) => {
    res.send('Lê todos os alunos')
})
alunoRouter.get('/aluno/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Lê o aluno ${id}`)
})
alunoRouter.put('/aluno/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Atualiza o aluno ${id}`)
})
alunoRouter.delete('/aluno/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Apaga o aluno ${id}`)
})
export default alunoRouter