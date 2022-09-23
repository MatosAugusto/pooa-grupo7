"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositoryEvento = void 0;
var evento_1 = require("../classes/evento");
var repositoryAluno_1 = require("./repositoryAluno");
var repositoryGrupoAcademico_1 = require("./repositoryGrupoAcademico");
var repositoryLocal_1 = require("./repositoryLocal");
var repositoryUsuario_1 = require("./repositoryUsuario");
var repositoryEvento = /** @class */ (function () {
    function repositoryEvento() {
        this.connection = { execute: function (query) { } };
    }
    repositoryEvento.prototype.insert = function (evento) {
        var query = "insert into evento (nome, dataCriacao, statusEvento, horaInicio, horaFim, cepLocal, statusEvento) values (".concat(evento.getNome(), ", ").concat(evento.getData(), ", ").concat(evento.getStatus(), ", ").concat(evento.getHoraInicio(), ", ").concat(evento.getHoraFim(), ", ").concat(evento.getLocal().getCep(), ", 'A_ACONTECER' )");
        var i = 0;
        while (i < evento.getOrganizadores().length) {
            var query2 = "insert into Organizadores (nomeEvento, raAluno) values (".concat(evento.getNome, ", ").concat(evento.getOrganizadores()[i].getRA(), " )");
        }
        i = 0;
        while (i < evento.getPalestrantes.length) {
            var query3 = "insert into Palestrantes (nomeEvento, cpfUsuario) values (".concat(evento.getNome, ", ").concat(evento.getPalestrantes()[i].getCpf(), " )");
        }
        i = 0;
        while (i < evento.getGruposResponsaveis.length) {
            var query4 = "insert into GrupoEvento (nomeEvento, idGrupo, tipo) values (".concat(evento.getNome, ", ").concat(evento.getGruposResponsaveis()[i].getID(), ", 'ORGANIZADOR' )");
        }
    };
    repositoryEvento.prototype.getAll = function () {
        var eventos = [];
        var query = "select * from Evento";
        var resultSet = this.connection.execute(query);
        while (resultSet) {
            var query2 = "select * from Organizadores where nomeEvento = ".concat(resultSet.nome);
            var resultSet2 = this.connection.execute(query2);
            var a = new repositoryAluno_1.repositoryAluno;
            var organizadores = [];
            while (resultSet2) {
                organizadores.push(a.getByID(resultSet2.raAluno));
            }
            var query3 = "select * from LocalEvento where cepLocal = ".concat(resultSet.cepLocal);
            var resultSet3 = this.connection.execute(query3);
            var l = new repositoryLocal_1.repositoryLocal;
            var local = l.getById(resultSet3.cep);
            var query4 = "select * from Palestrantes where nomeEvento = ".concat(resultSet.nome);
            var resultSet4 = this.connection.execute(query4);
            var u = new repositoryUsuario_1.repositoryUsuario;
            var palestrantes = [];
            while (resultSet4) {
                palestrantes.push(u.getByCpf(resultSet4.cpfUsuario));
            }
            var query5 = "select * from GrupoEvento where nomeEvento = ".concat(resultSet.nome, " and tipo=\"ORGANIZADOR\"");
            var resultSet5 = this.connection.execute(query5);
            var g = new repositoryGrupoAcademico_1.repositoryGrupoAcademico;
            var grupos = [];
            while (resultSet5) {
                grupos.push(g.getById(resultSet5.idGrupo));
            }
            var evento = new evento_1.Evento(resultSet.nome, resultSet.data, resultSet.statusEvento, resultSet.horaInicio, resultSet.horaFim, organizadores, local, palestrantes, grupos);
            eventos.push(evento);
        }
        return eventos;
    };
    repositoryEvento.prototype.getByNome = function (nome) {
        var query = "select * from Evento where nome = ".concat(nome);
        var resultSet = this.connection.execute(query);
        var query2 = "select * from Organizadores where nomeEvento = ".concat(nome);
        var resultSet2 = this.connection.execute(query2);
        var a = new repositoryAluno_1.repositoryAluno;
        var organizadores = [];
        while (resultSet2) {
            organizadores.push(a.getByID(resultSet2.raAluno));
        }
        var query3 = "select * from LocalEvento where cepLocal = ".concat(resultSet.cepLocal);
        var resultSet3 = this.connection.execute(query3);
        var l = new repositoryLocal_1.repositoryLocal;
        var local = l.getById(resultSet3.cep);
        var query4 = "select * from Palestrantes where nomeEvento = ".concat(nome);
        var resultSet4 = this.connection.execute(query4);
        var u = new repositoryUsuario_1.repositoryUsuario;
        var palestrantes = [];
        while (resultSet4) {
            palestrantes.push(u.getByCpf(resultSet4.cpfUsuario));
        }
        var query5 = "select * from GrupoEvento where nomeEvento = ".concat(nome, " and tipo=\"ORGANIZADOR\"");
        var resultSet5 = this.connection.execute(query5);
        var g = new repositoryGrupoAcademico_1.repositoryGrupoAcademico;
        var grupos = [];
        while (resultSet5) {
            grupos.push(g.getById(resultSet5.idGrupo));
        }
        var evento = new evento_1.Evento(resultSet.nome, resultSet.data, resultSet.statusEvento, resultSet.horaInicio, resultSet.horaFim, organizadores, local, palestrantes, grupos);
        return evento;
    };
    repositoryEvento.prototype.delete = function (evento) {
        var nome = evento.getNome();
        var query = "delete from Evento where nome = ".concat(nome);
    };
    repositoryEvento.prototype.update = function (evento) {
        var query = "update Evento set nome = ".concat(evento.getNome, ", statusEvento = ").concat(evento.getStatus, ", dataCriacao = ").concat(evento.getData, ", horaInicio = ").concat(evento.getHoraInicio(), ", horaFim = ").concat(evento.getHoraFim, ", cepLocal = ").concat(evento.getLocal().getCep, " where nome = ").concat(evento.getNome());
    };
    repositoryEvento.prototype.insertPalestrante = function (usuario, evento) {
        var query = "insert into Palestrantes (nomeEvento, cpfUsuario) values (".concat(evento.getNome, ", ").concat(usuario.getNome, ")");
    };
    repositoryEvento.prototype.insertOrganizador = function (aluno, evento) {
        var query = "insert into Organizadores (nomeEvento, raAluno) values (".concat(evento.getNome, ", ").concat(aluno.getRA, ")");
    };
    repositoryEvento.prototype.alterarLocal = function (local, evento) {
        var query = "update Evento set cepLocal = ".concat(local.getCep, " where nome = ").concat(evento.getNome());
    };
    repositoryEvento.prototype.alterarData = function (data, evento) {
        var query = "update Evento set dataCriacao = ".concat(data, " where nome = ").concat(evento.getNome());
    };
    repositoryEvento.prototype.alterarstatusEvento = function (statusEvento, evento) {
        var query = "update Evento set statusEvento = ".concat(statusEvento, " where nome = ").concat(evento.getNome());
    };
    return repositoryEvento;
}());
exports.repositoryEvento = repositoryEvento;
