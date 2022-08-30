import express from 'express'

const processoSeletivoRouter = express.Router()
processoSeletivoRouter.post('/processoSeletivo', (req, res) => {
    res.send('Cria novo processo seletivo')
})
processoSeletivoRouter.get('/processoSeletivo', (req, res) => {
    res.send('Lê todos os processos seletivos')
})
processoSeletivoRouter.get('/processoSeletivo/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Lê o processo seletivo ${id}`)
})
processoSeletivoRouter.put('/processoSeletivo/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Atualiza o processo seletivo ${id}`)
})
processoSeletivoRouter.delete('/processoSeletivo/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Apaga o processo seletivo ${id}`)
})
export default processoSeletivoRouter