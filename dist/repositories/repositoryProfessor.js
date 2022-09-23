"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositoryProfessor = void 0;
var professor_1 = require("../classes/professor");
var repositoryDepartamento_1 = require("./repositoryDepartamento");
var repositoryUsuario_1 = require("./repositoryUsuario");
var repositoryProfessor = /** @class */ (function () {
    function repositoryProfessor() {
        this.connection = { execute: function (query) { } };
    }
    repositoryProfessor.prototype.insert = function (professor) {
        var query = "insert into professor (cpfUsuario, idDepartamento, nroUniversidade, statusBiblioteca) values (".concat(professor.getCpf(), ",").concat(professor.getDepartamento(), ",").concat(professor.getNroUniversidade(), ", ").concat(professor.getStatusBiblioteca(), " )");
    };
    repositoryProfessor.prototype.getAll = function () {
        var query = 'SELECT * FROM Professor';
        var resultSet = this.connection.execute(query);
        var d = new repositoryDepartamento_1.repositoryDepartamento;
        var u = new repositoryUsuario_1.repositoryUsuario;
        var professores = [];
        while (resultSet) {
            var usuario = u.getByCpf(resultSet.cpf);
            var professor = new professor_1.Professor(resultSet.nroUniversidade, d.getByID(resultSet.idDepartamento), resultSet.statusBiblioteca, usuario.getNome(), resultSet.cpf, usuario.getDataNascimento(), usuario.getSenha(), usuario.getPerfil());
            professores.push(professor);
        }
        return professores;
    };
    repositoryProfessor.prototype.getById = function (cpf) {
        var query = "SELECT * FROM Professor WHERE cpfUsuario = ".concat(cpf);
        var resultSet = this.connection.execute(query);
        var d = new repositoryDepartamento_1.repositoryDepartamento;
        var u = new repositoryUsuario_1.repositoryUsuario;
        var usuario = u.getByCpf(resultSet.cpf);
        var professor = new professor_1.Professor(resultSet.nroUniversidade, d.getByID(resultSet.idDepartamento), resultSet.statusBiblioteca, usuario.getNome(), cpf, usuario.getDataNascimento(), usuario.getSenha(), usuario.getPerfil());
        return professor;
    };
    repositoryProfessor.prototype.delete = function (professor) {
        var cpf = professor.getCpf();
        var query = "delete from professor where cpfUsuario = ".concat(cpf);
    };
    repositoryProfessor.prototype.update = function (professor) {
        var query = "update Professor set idDepartamento = ".concat(professor.getDepartamento().getID, ", nroUniversidade = ").concat(professor.getNroUniversidade, ", statusBiblioteca = ").concat(professor.getStatusBiblioteca, " where cpfUsuario = ").concat(professor.getCpf());
    };
    return repositoryProfessor;
}());
exports.repositoryProfessor = repositoryProfessor;
