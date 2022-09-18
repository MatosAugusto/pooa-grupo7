import sqlite3  from 'sqlite3'

const DBSOURCE = 'db.sqlite'
//const DBSOURCE = 'pooa7.db'
const SQL_TABLES_CREATE = `
    CREATE TABLE Acoes (
        id INTEGER PRIMARY KEY,
        codigo VARCHAR(4),
        nome VARCHAR(256)
    ),
    CREATE TABLE GrupoAcademico (
        idGrupo VARCHAR(5) PRIMARY KEY,
        nome VARCHAR(256),
        descricao VARCHAR(256),
        dataCriacao VARCHAR(20),
        statusGrupo BOOLEAN NOT NULL DEFAULT FALSE,
        idDepartamento INTEGER,
        cpfResponsavel VARCHAR(11),
        limiteParticipantes INTEGER
    ),
    CREATE TABLE Disciplina (
        idDisciplina INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR(256)
    ),
    CREATE TABLE Aluno (
        cpfUsuario VARCHAR(11),
        ra VARCHAR(10) PRIMARY KEY,
        statusBiblioteca BOOLEAN NOT NULL DEFAULT FALSE
    ),
    CREATE TABLE Departamento (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR(256),
        sigla VARCHAR(5)
    ),
    CREATE TABLE Evento (
        nome VARCHAR(100) PRIMARY KEY,
        dataCriacao VARCHAR(20),
        horaInicio VARCHAR(20),
        horaFim VARCHAR(20),
        cepLocal VARCHAR(8)
    ),
    CREATE TABLE Etapa (
        idEtapa INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR(256),
        descricao VARCHAR(256)
    ),
    CREATE TABLE Local (
        cep VARCHAR(8) PRIMARY KEY,
        logradouro VARCHAR(100),
        numero INTEGER,
        bairro VARCHAR(100),
        descricao VARCHAR(100)
    ),
    CREATE TABLE Perfil (
        nome VARCHAR(30) PRIMARY KEY,
        criadoEm VARCHAR(20),
        alteradoEm VARCHAR(20)
    ),
    CREATE TABLE ProcessoSeletivo (
        idProcesso INTEGER PRIMARY KEY AUTOINCREMENT,
        dataProcesso VARCHAR(20),
        nroInscritos INTEGER,
        nroVagas INTEGER,
        nroAprovados INTEGER
    ),
    CREATE TABLE Professor (
        cpfUsuario VARCHAR(11),
        idDepartamento INTEGER,
        nroUniversidade INTEGER PRIMARY KEY AUTOINCREMENT,
        statusBiblioteca BOOLEAN NOT NULL DEFAULT FALSE
    ),
    CREATE TABLE USUARIO (
        nome VARCHAR(256),
        cpf VARCHAR(11) PRIMARY KEY,
        dataNascimento VARCHAR(20),
        senha VARCHAR(256),
        perfil VARCHAR(30)
    )
    `

const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.log('aaaaaa');
        console.error(err.message);
        throw err;
    } else {
        console.log('Base de dados conectada com sucesso.');
        database.run(SQL_TABLES_CREATE, (err) => {
            if (err) {
                // Possivelmente a tabela já foi criada
                console.log('Teste');
                console.log(err);
            } else {
                console.log('Tabela itens criada com sucesso.');
            }
        })
    }
})
export default database