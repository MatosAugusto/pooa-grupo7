import express from 'express'

const grupoAcademicoRouter = express.Router()
grupoAcademicoRouter.post('/grupoAcademico', (req, res) => {
    res.send('Cria novo grupo academico')
})
grupoAcademicoRouter.get('/grupoAcademico', (req, res) => {
    res.send('Lê todos os grupos academicos')
})
grupoAcademicoRouter.get('/grupoAcademico/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Lê o grupo academico ${id}`)
})
grupoAcademicoRouter.put('/grupoAcademico/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Atualiza o grupo academico ${id}`)
})
grupoAcademicoRouter.delete('/grupoAcademico/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Apaga o grupo academico ${id}`)
})
export default grupoAcademicoRouter