"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositoryGrupoAcademico = void 0;
var grupoacademico_1 = require("../classes/grupoacademico");
var repositoryAluno_1 = require("./repositoryAluno");
var repositoryDepartamento_1 = require("./repositoryDepartamento");
var repositoryEvento_1 = require("./repositoryEvento");
var repositoryUsuario_1 = require("./repositoryUsuario");
var repositoryGrupoAcademico = /** @class */ (function () {
    function repositoryGrupoAcademico() {
        this.connection = { execute: function (query) { } };
    }
    repositoryGrupoAcademico.prototype.insert = function (grupo) {
        var query = "insert into GrupoAcademico (id, nome, descricao, dataCriacao, statusGrupo, idDepartamento, cpfResponsavel, limiteParticipantes) values (".concat(grupo.getID(), ", ").concat(grupo.getNome(), ", ").concat(grupo.getDescricao(), ", ").concat(grupo.getDataCriacao(), ", ").concat(grupo.getStatus(), ", ").concat(grupo.getDepartamento().getID(), ", ").concat(grupo.getResponsavel().getCpf, ", ").concat(grupo.getLimiteParticipantes(), " )");
        var i = 0;
        while (i < grupo.getParticipantes.length) {
            var query2 = "insert into participantes (idGrupo, raAluno) values (".concat(grupo.getID(), ", ").concat(grupo.getParticipantes()[i].getRA(), " )");
        }
        i = 0;
        while (i < grupo.getRepresentantes.length) {
            var query3 = "insert into Representantes (idGrupo, raAluno) values (".concat(grupo.getID, ", ").concat(grupo.getRepresentantes()[i].getRA(), " )");
        }
        i = 0;
        while (i < grupo.getListaEventos.length) {
            var query4 = "insert into GrupoEvento (nomeEvento, idGrupo, tipo) values (".concat(grupo.getListaEventos()[i].getNome(), ", ").concat(grupo.getID(), ", 'ORGANIZADOR' )");
        }
        i = 0;
        while (i < grupo.getEventosParticipados.length) {
            var query4 = "insert into GrupoEvento (nomeEvento, idGrupo, tipo) values (".concat(grupo.getEventosParticipados()[i].getNome, ", ").concat(grupo.getID(), ", 'PARTICIPANTE' )");
        }
    };
    repositoryGrupoAcademico.prototype.getAll = function () {
        var grupos = [];
        var representantes = [];
        var participantes = [];
        var eventosOrganizados = [];
        var eventosParticipados = [];
        var query = "select * from GrupoAcademico";
        var resultSet = this.connection.execute(query);
        var departamento;
        var d = new repositoryDepartamento_1.repositoryDepartamento;
        var responsavel;
        var r = new repositoryUsuario_1.repositoryUsuario;
        var aluno;
        var a = new repositoryAluno_1.repositoryAluno;
        var evento;
        var e = new repositoryEvento_1.repositoryEvento;
        while (resultSet) {
            var query2 = "select * from Representantes where idGrupo = ".concat(resultSet.idGrupo);
            var resultSet2 = this.connection.execute(query2);
            while (resultSet2) {
                aluno = a.getByID(resultSet2.raAluno);
                representantes.push(aluno);
            }
            var query3 = "select * from Participantes where idGrupo = ".concat(resultSet.idGrupo);
            var resultSet3 = this.connection.execute(query3);
            while (resultSet3) {
                aluno = a.getByID(resultSet3.raAluno);
                participantes.push(aluno);
            }
            var query4 = "select * from GrupoEvento where idGrupo = ".concat(resultSet.idGrupo, " AND tipo = 'ORGANIZADOR'");
            var resultSet4 = this.connection.execute(query4);
            while (resultSet4) {
                evento = e.getByNome(resultSet4.nomeEvento);
                eventosOrganizados.push(evento);
            }
            var query5 = "select * from GrupoEvento where idGrupo = ".concat(resultSet.idGrupo, " AND tipo = 'PARTICIPANTE'");
            var resultSet5 = this.connection.execute(query5);
            while (resultSet5) {
                evento = e.getByNome(resultSet5.nomeEvento);
                eventosParticipados.push(evento);
            }
            departamento = d.getByID(resultSet.idDepartamento);
            responsavel = r.getByCpf(resultSet.cpfResponsavel);
            var grupoacademico = new grupoacademico_1.GrupoAcademico(resultSet.id, resultSet.nome, resultSet.descricao, resultSet.dataCriacao, resultSet.statusGrupo, departamento, responsavel, representantes, resultSet.limiteParticipantes, participantes, eventosOrganizados, eventosParticipados);
            grupos.push(grupoacademico);
        }
        return grupos;
    };
    repositoryGrupoAcademico.prototype.getById = function (id) {
        var representantes = [];
        var participantes = [];
        var eventosOrganizados = [];
        var eventosParticipados = [];
        var departamento;
        var d = new repositoryDepartamento_1.repositoryDepartamento;
        var responsavel;
        var r = new repositoryUsuario_1.repositoryUsuario;
        var aluno;
        var a = new repositoryAluno_1.repositoryAluno;
        var evento;
        var e = new repositoryEvento_1.repositoryEvento;
        var query = "select * from GrupoAcademico where idGrupo = ".concat(id);
        var resultSet = this.connection.execute(query);
        var query2 = "select * from Representantes where idGrupo = ".concat(resultSet.idGrupo);
        var resultSet2 = this.connection.execute(query2);
        while (resultSet2) {
            aluno = a.getByID(resultSet2.raAluno);
            representantes.push(aluno);
        }
        var query3 = "select * from Participantes where idGrupo = ".concat(resultSet.idGrupo);
        var resultSet3 = this.connection.execute(query3);
        while (resultSet3) {
            aluno = a.getByID(resultSet3.raAluno);
            participantes.push(aluno);
        }
        var query4 = "select * from GrupoEvento where idGrupo = ".concat(resultSet.idGrupo, " AND tipo = 'ORGANIZADOR'");
        var resultSet4 = this.connection.execute(query4);
        while (resultSet4) {
            evento = e.getByNome(resultSet4.nomeEvento);
            eventosOrganizados.push(evento);
        }
        var query5 = "select * from GrupoEvento where idGrupo = ".concat(resultSet.idGrupo, " AND tipo = 'PARTICIPANTE'");
        var resultSet5 = this.connection.execute(query5);
        while (resultSet5) {
            evento = e.getByNome(resultSet5.nomeEvento);
            eventosParticipados.push(evento);
        }
        departamento = d.getByID(resultSet.idDepartamento);
        responsavel = r.getByCpf(resultSet.cpfResponsavel);
        var grupo = new grupoacademico_1.GrupoAcademico(resultSet.id, resultSet.nome, resultSet.descricao, resultSet.dataCriacao, resultSet.statusGrupo, departamento, responsavel, representantes, resultSet.limiteParticipantes, participantes, eventosOrganizados, eventosParticipados);
        return grupo;
    };
    repositoryGrupoAcademico.prototype.getByNome = function (nome) {
        var representantes = [];
        var participantes = [];
        var eventosOrganizados = [];
        var eventosParticipados = [];
        var departamento;
        var d = new repositoryDepartamento_1.repositoryDepartamento;
        var responsavel;
        var r = new repositoryUsuario_1.repositoryUsuario;
        var aluno;
        var a = new repositoryAluno_1.repositoryAluno;
        var evento;
        var e = new repositoryEvento_1.repositoryEvento;
        var query = "select * from GrupoAcademico where nome = ".concat(nome);
        var resultSet = this.connection.execute(query);
        var query2 = "select * from Representantes where idGrupo = ".concat(resultSet.idGrupo);
        var resultSet2 = this.connection.execute(query2);
        while (resultSet2) {
            aluno = a.getByID(resultSet2.raAluno);
            representantes.push(aluno);
        }
        var query3 = "select * from Participantes where idGrupo = ".concat(resultSet.idGrupo);
        var resultSet3 = this.connection.execute(query3);
        while (resultSet3) {
            aluno = a.getByID(resultSet3.raAluno);
            participantes.push(aluno);
        }
        var query4 = "select * from GrupoEvento where idGrupo = ".concat(resultSet.idGrupo, " AND tipo = 'ORGANIZADOR'");
        var resultSet4 = this.connection.execute(query4);
        while (resultSet4) {
            evento = e.getByNome(resultSet4.nomeEvento);
            eventosOrganizados.push(evento);
        }
        var query5 = "select * from GrupoEvento where idGrupo = ".concat(resultSet.idGrupo, " AND tipo = 'PARTICIPANTE'");
        var resultSet5 = this.connection.execute(query5);
        while (resultSet5) {
            evento = e.getByNome(resultSet5.nomeEvento);
            eventosParticipados.push(evento);
        }
        departamento = d.getByID(resultSet.idDepartamento);
        responsavel = r.getByCpf(resultSet.cpfResponsavel);
        var grupo = new grupoacademico_1.GrupoAcademico(resultSet.id, resultSet.nome, resultSet.descricao, resultSet.dataCriacao, resultSet.statusGrupo, departamento, responsavel, representantes, resultSet.limiteParticipantes, participantes, eventosOrganizados, eventosParticipados);
        return grupo;
    };
    repositoryGrupoAcademico.prototype.getParticipantes = function (id) {
        var participantes = [];
        var aluno;
        var a = new repositoryAluno_1.repositoryAluno;
        var query = "select * from Participantes where idGrupo = ".concat(id);
        var resultSet = this.connection.execute(query);
        while (resultSet) {
            aluno = a.getByID(resultSet.raAluno);
            participantes.push(aluno);
        }
        return participantes;
    };
    repositoryGrupoAcademico.prototype.getResponsavel = function (id) {
        var responsavel;
        var r = new repositoryUsuario_1.repositoryUsuario;
        var query = "select * from GrupoAcademico where idGrupo = ".concat(id);
        var resultSet = this.connection.execute(query);
        responsavel = r.getByCpf(resultSet.cpfResponsavel);
        return responsavel;
    };
    repositoryGrupoAcademico.prototype.getEventosOrganizados = function (id) {
        var eventosOrganizados = [];
        var evento;
        var e = new repositoryEvento_1.repositoryEvento;
        var query = "select * from GrupoEvento where idGrupo = ".concat(id, " AND tipo = 'ORGANIZADOR'");
        var resultSet = this.connection.execute(query);
        while (resultSet) {
            evento = e.getByNome(resultSet.nomeEvento);
            eventosOrganizados.push(evento);
        }
        return eventosOrganizados;
    };
    repositoryGrupoAcademico.prototype.getEventosParticipados = function (id) {
        var eventosParticipados = [];
        var evento;
        var e = new repositoryEvento_1.repositoryEvento;
        var query = "select * from GrupoEvento where idGrupo = ".concat(id, " AND tipo = 'PARTICIPANTE'");
        var resultSet = this.connection.execute(query);
        while (resultSet) {
            evento = e.getByNome(resultSet.nomeEvento);
            eventosParticipados.push(evento);
        }
        return eventosParticipados;
    };
    repositoryGrupoAcademico.prototype.getMembrosAtivos = function (id) {
        var participantes = [];
        var aluno;
        var a = new repositoryAluno_1.repositoryAluno;
        var query = "select * from Participantes where idGrupo = ".concat(id);
        var resultSet = this.connection.execute(query);
        while (resultSet) {
            aluno = a.getByID(resultSet.raAluno);
            if (aluno.getPerfil().getNome() != "EM_DIA") {
                participantes.push(aluno);
            }
        }
        return participantes;
    };
    // Os demais grupos precisarão recuperar quais grupos o aluno está participando
    repositoryGrupoAcademico.prototype.getGruposAcademicosbyRa = function (ra) {
        var query = "select * from Participantes where raAluno = ".concat(ra);
        var resultSet = this.connection.execute(query);
        var grupos = [];
        var grupo;
        var g = new repositoryGrupoAcademico;
        while (resultSet) {
            grupo = g.getById(resultSet.idGrupo);
            grupos.push(grupo);
        }
        return grupos;
    };
    repositoryGrupoAcademico.prototype.delete = function (grupo) {
        var id = grupo.getID();
        var query = "delete from GrupoAcademico where idGrupo = ".concat(id);
    };
    repositoryGrupoAcademico.prototype.update = function (grupo) {
        var query = "update GrupoAcademico set nome = ".concat(grupo.getNome(), ", descricao = ").concat(grupo.getDescricao, ", dataCriacao = ").concat(grupo.getDataCriacao, ", statusGrupo = ").concat(grupo.getStatus, ", idDepartamento = ").concat(grupo.getDepartamento().getID, ", cpfResponsavel = ").concat(grupo.getResponsavel().getCpf, ", limiteParticipantes = ").concat(grupo.getLimiteParticipantes, " where idGrupo = ").concat(grupo.getID());
    };
    return repositoryGrupoAcademico;
}());
exports.repositoryGrupoAcademico = repositoryGrupoAcademico;
