import sqlite3 from 'sqlite3'
const DBSOURCE = 'db.sqlite'
const SQL_ACOES_CREATE = `
    CREATE TABLE Acoes (
        codigo INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
    )`
const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Base de dados conectada com sucesso.')
        database.run(SQL_ACOES_CREATE, (err) => {
            if (err) {
                // Possivelmente a tabela já foi criada
            } else {
                console.log('Tabela itens criada com sucesso.')
            }
        })
    }
})
export default database