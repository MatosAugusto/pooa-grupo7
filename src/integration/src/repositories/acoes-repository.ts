import Acoes from '../models/acoes'
import database from './database'
const acoesRepository = {
    criar: (acao: Acoes, callback: (id?: number) => void) => {
        const sql = 'INSERT INTO Acoes (codigo, nome) VALUES (?, ?)';
        const params = [acao.nome, acao.codigo];
        console.log("vai rodar");
        database.run(sql, params, function(_err) {
            callback(this?.lastID)
        })
    },
    lerTodos: (callback: (acao: Acoes[]) => void) => {
        const sql = 'SELECT * FROM Acoes'
        const params: any[] = []
        database.all(sql, params, (_err, rows) => callback(rows))
    },
    ler: (id: number, callback: (acao?: Acoes) => void) => {
        const sql = 'SELECT * FROM Acoes WHERE id = ?'
        const params = [id]
        database.get(sql, params, (_err, row) => callback(row))
    },
    atualizar: (id: number, acao: Acoes, callback: (notFound: boolean) => void) => {
        const sql = 'UPDATE Acoes SET nome = ?, codigo = ? WHERE id = ?'
        const params = [acao.nome, acao.codigo, id]
        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })
    },
    apagar: (id: number, callback: (notFound: boolean) => void) => {
        const sql = 'DELETE FROM Acoes WHERE id = ?'
        const params = [id]
        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })
    },
}
export default acoesRepository