import sqlite3  from 'sqlite3'

//const DBSOURCE = 'db.sqlite'
const DBSOURCE = 'pooa7.db';
const SQL_TABLES_CREATE = `
    CREATE TABLE Acoes (
        "id" INTEGER 
        PRIMARY KEY("id" AUTOINCREMENT),
        "codigo" TEXT,
        "nome" TEXT
    );
    CREATE TABLE GrupoAcademico (
        "idGrupo" TEXT PRIMARY KEY,
        "nome" TEXT,
        "descricao" TEXT,
        "dataCriacao" TEXT,
        "statusGrupo" INTEGER NOT NULL DEFAULT 0,
        "idDepartamento" INTEGER,
        "cpfResponsavel" TEXT,
        "limiteParticipantes" INTEGER
    );
    CREATE TABLE Disciplina (
        "idDisciplina" INTEGER
        PRIMARY KEY("idDisciplina" AUTOINCREMENT),
        "nome" TEXT
    );
    CREATE TABLE Aluno (
        "cpfUsuario" TEXT,
        "ra" TEXT
        PRIMARY KEY("ra"),
        "statusBiblioteca" INTEGER NOT NULL DEFAULT 0
    );
    CREATE TABLE Departamento (
        "id" INTEGER 
        PRIMARY KEY("id" AUTOINCREMENT),
        "nome" TEXT,
        "sigla" TEXT
    );
    CREATE TABLE Evento (
        "nome" TEXT
        PRIMARY KEY("nome"),
        "dataCriacao" TEXT,
        "horaInicio" TEXT,
        "horaFim" TEXT,
        "cepLocal" TEXT
    );
    CREATE TABLE Etapa (
        "idEtapa" INTEGER
        PRIMARY KEY("idEtapa" AUTOINCREMENT),
        "nome" TEXT,
        "descricao" TEXT
    );
    CREATE TABLE Local (
        "cep" TEXT
        PRIMARY KEY("cep"),
        "logradouro" TEXT,
        "numero" INTEGER,
        "bairro" TEXT,
        "descricao" TEXT
    );
    CREATE TABLE Perfil (
        "nome" TEXT
        PRIMARY KEY ("nome"),
        "criadoEm" TEXT,
        "alteradoEm" TEXT
    );
    CREATE TABLE ProcessoSeletivo (
        "idProcesso" INTEGER
        PRIMARY KEY("idProcesso" AUTOINCREMENT),
        "dataProcesso" TEXT,
        "nroInscritos" INTEGER,
        "nroVagas" INTEGER,
        "nroAprovados" INTEGER
    );
    CREATE TABLE Professor (
        "cpfUsuario" TEXT,
        "idDepartamento" INTEGER,
        "nroUniversidade" INTEGER
        PRIMARY KEY("nroUniversidade" AUTOINCREMENT),
        "statusBiblioteca" INTEGER NOT NULL DEFAULT 0
    );
    CREATE TABLE USUARIO (
        "nome" TEXT,
        "cpf" TEXT
        PRIMARY KEY("cpf"),
        "dataNascimento" TEXT,
        "senha" TEXT,
        "perfil" TEXT
    );
    `

const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.log('aaaaaa');
        console.error(err.message);
        throw err;
    } else {
        console.log('Base de dados conectada com sucesso.');
        // database.run(SQL_TABLES_CREATE, (err) => {
        //     if (err) {
        //         // Possivelmente a tabela já foi criada
        //         console.log('Teste');
        //         console.log(err.message);
        //     } else {
        //         console.log('Tabela itens criada com sucesso.');
        //     }
        // })
    }
})
export default database