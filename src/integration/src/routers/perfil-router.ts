import express from 'express'

const perfilRouter = express.Router()
perfilRouter.post('/perfil', (req, res) => {
    res.send('Cria novo perfil')
})
perfilRouter.get('/perfil', (req, res) => {
    res.send('Lê todos os perfis')
})
perfilRouter.get('/perfil/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Lê o perfil ${id}`)
})
perfilRouter.put('/perfil/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Atualiza o perfil ${id}`)
})
perfilRouter.delete('/perfil/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Apaga o perfil ${id}`)
})
export default perfilRouter