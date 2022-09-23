"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositoryDisciplina = void 0;
var disciplina_1 = require("../classes/disciplina");
var repositoryDisciplina = /** @class */ (function () {
    function repositoryDisciplina() {
        this.connection = { execute: function (query) { } };
    }
    repositoryDisciplina.prototype.insert = function (disciplina) {
        var query = "insert into Disciplina (nome) values (".concat(disciplina.getNome(), " )");
    };
    repositoryDisciplina.prototype.getAll = function () {
        var disciplinas = [];
        var query = "select * from Disciplina";
        var resultSet = this.connection.execute(query);
        while (resultSet) {
            var disciplina = new disciplina_1.Disciplina(resultSet.idDisciplina, resultSet.nome);
            disciplinas.push(disciplina);
        }
        return disciplinas;
    };
    repositoryDisciplina.prototype.getByID = function (id) {
        var query = "select * from Disciplina where idDisciplina = ".concat(id);
        var resultSet = this.connection.execute(query);
        var disciplina = new disciplina_1.Disciplina(resultSet.idDisciplina, resultSet.nome);
        return disciplina;
    };
    repositoryDisciplina.prototype.delete = function (disciplina) {
        var id = disciplina.getID();
        var query = "delete from Disciplina where idDisciplina = ".concat(id);
    };
    repositoryDisciplina.prototype.update = function (disciplina) {
        var query = "update Disciplina set nome = ".concat(disciplina.getNome(), " where idDisciplina = ").concat(disciplina.getID());
    };
    return repositoryDisciplina;
}());
exports.repositoryDisciplina = repositoryDisciplina;
