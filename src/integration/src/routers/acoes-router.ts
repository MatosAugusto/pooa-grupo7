import express from 'express'
import Acoes from '../models/acoes'
import acoesRepository from '../repositories/acoes-repository'

const acoesRouter = express.Router()
// acoesRouter.post('/acoes', (req, res) => {
//     const acao: Acoes = req.body
//     const id = '123'
//     res.status(201).location(`/acoes/${id}`).send()
// })
acoesRouter.post('/acoes', (req, res) => {
    const acao: Acoes = req.body
    acoesRepository.criar(acao, (id) => {
        if (id) {
            res.status(201).location(`/acoes/${id}`).send()
        } else {
            res.status(400).send()
        }
    })
})
// acoesRouter.get('/acoes', (req, res) => {
//     const acoes: Acoes[] = [
//         {
//             nome: 'Produto 1',
//             codigo: '2'
//         },
//         {
//             nome: 'Produto 2',
//             codigo: '3'
//         }
//     ]
//     res.json(acoes)
// })
acoesRouter.get('/acoes', (req, res) => {
    acoesRepository.lerTodos((acoes) => res.json(acoes))
})
// acoesRouter.get('/acoes/:id', (req, res) => {
//     const id: string = String(+req.params.id)
//     const acoes: Acoes = {
//         nome: `Produto ${id}`,
//         codigo: `Codigo do produto ${id}`
//     }
//     res.json(acoes)
//     //res.send(`Lê a acao ${id}`)
// })
acoesRouter.get('/acoes/:id', (req, res) => {
    const id: number = +req.params.id
    acoesRepository.ler(id, (acao) => {
        if (acao) {
            res.json(acao)
        } else {
            res.status(404).send()
        }
    })
})
// acoesRouter.put('/acoes/:id', (req, res) => {
//     const id: string = String(+req.params.id)
//     res.status(204).send()
// })
acoesRouter.put('/acoes/:id', (req, res) => {
    const id: number = +req.params.id
    acoesRepository.atualizar(id, req.body, (notFound) => {
        if (notFound) {
            res.status(404).send()
        } else {
            res.status(204).send()
        }
    })
})
acoesRouter.delete('/acoes/:id', (req, res) => {
    const id: number = +req.params.id
    acoesRepository.apagar(id, (notFound) => {
        if (notFound) {
            res.status(404).send()
        } else {
            res.status(204).send()
        }
    })
})
// acoesRouter.delete('/acoes/:id', (req, res) => {
//     const id: string = String(+req.params.id)
//     res.status(204).send()
// })
export default acoesRouter