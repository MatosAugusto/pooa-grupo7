"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositoryAluno = void 0;
var aluno_1 = require("../classes/aluno");
var repositoryDisciplinas_1 = require("./repositoryDisciplinas");
var repositoryUsuario_1 = require("./repositoryUsuario");
var repositoryAluno = /** @class */ (function () {
    function repositoryAluno() {
        this.connection = { execute: function (query) { } };
    }
    repositoryAluno.prototype.insert = function (aluno) {
        var query = "insert into aluno (ra, statusBiblioteca) values (".concat(aluno.getRA(), ", ").concat(aluno.getStatusBiblioteca(), " )");
        var i = 0;
        while (i < aluno.getDisciplinas().length) {
            var query2 = "insert into AlunoDisciplina (raAluno, idDisciplina) values (".concat(aluno.getRA(), ", ").concat(aluno.getDisciplinas()[i].getID(), " )");
        }
    };
    repositoryAluno.prototype.getAll = function () {
        var alunos = [];
        var disciplinas = [];
        var disciplina;
        var query = "select * from Aluno";
        var resultSet = this.connection.execute(query);
        var d = new repositoryDisciplinas_1.repositoryDisciplina;
        var u = new repositoryUsuario_1.repositoryUsuario;
        while (resultSet) {
            var query2 = "select * from AlunoDisciplinas where raAluno = ".concat(resultSet.ra);
            var resultSet2 = this.connection.execute(query2);
            while (resultSet2) {
                disciplina = d.getByID(resultSet2.idDisciplina);
                disciplinas.push(disciplina);
            }
            var usuario = u.getByCpf(resultSet.cpf);
            var aluno = new aluno_1.Aluno(resultSet.ra, disciplinas, resultSet.statusBiblioteca, usuario.getNome(), usuario.getCpf(), usuario.getDataNascimento(), usuario.getSenha(), usuario.getPerfil());
            alunos.push(aluno);
            disciplinas.splice(0, disciplinas.length);
        }
        return alunos;
    };
    repositoryAluno.prototype.getByID = function (ra) {
        var disciplinas = [];
        var disciplina;
        var d = new repositoryDisciplinas_1.repositoryDisciplina;
        var query = "select * from Aluno where ra = ".concat(ra);
        var resultSet = this.connection.execute(query);
        var query2 = "select * from AlunoDisciplinas where raAluno = ".concat(resultSet.ra);
        var resultSet2 = this.connection.execute(query2);
        while (resultSet2) {
            disciplina = d.getByID(resultSet2.idDisciplina);
            disciplinas.push(disciplina);
        }
        var u = new repositoryUsuario_1.repositoryUsuario;
        var usuario = u.getByCpf(resultSet.cpf);
        var aluno = new aluno_1.Aluno(resultSet.ra, disciplinas, resultSet.statusBiblioteca, usuario.getNome(), usuario.getCpf(), usuario.getDataNascimento(), usuario.getSenha(), usuario.getPerfil());
        return aluno;
    };
    repositoryAluno.prototype.delete = function (aluno) {
        var ra = aluno.getRA();
        var query = "delete from Aluno where ra = ".concat(ra);
    };
    repositoryAluno.prototype.update = function (aluno) {
        var query = "update aluno set statusBiblioteca=".concat(aluno.getStatusBiblioteca, " where ra = ").concat(aluno.getRA());
    };
    return repositoryAluno;
}());
exports.repositoryAluno = repositoryAluno;
