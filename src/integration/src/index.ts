import express from 'express'
import cors from 'cors'
import acoesRouter from './routers/acoes-router'
import alunoRouter from './routers/aluno-router'
import departamentoRouter from './routers/departamento-router'
import disciplinaRouter from './routers/disciplina-router'
import etapaRouter from './routers/etapa-router'
import eventoRouter from './routers/evento-router'
import grupoAcademicoRouter from './routers/grupoacademico-router'
import localRouter from './routers/local-router'
import perfilRouter from './routers/perfil-router'
import processoSeletivoRouter from './routers/processoseletivo-router'
import professorRouter from './routers/professor-router'
import usuarioRouter from './routers/usuario-router'

// Porta do servidor
const PORT = process.env.PORT || 4000
// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'
// App Express
const app = express()
// Endpoint raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo!')
})
// Cors
app.use(cors({
    origin: ['http://localhost:3000']
}))

// Rotas
app.use('/api', acoesRouter)
app.use('/api', alunoRouter)
app.use('/api', departamentoRouter)
app.use('/api', disciplinaRouter)
app.use('/api', etapaRouter)
app.use('/api', eventoRouter)
app.use('/api', grupoAcademicoRouter)
app.use('/api', localRouter)
app.use('/api', perfilRouter)
app.use('/api', processoSeletivoRouter)
app.use('/api', professorRouter)
app.use('/api', usuarioRouter)

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.status(404)
})
// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})