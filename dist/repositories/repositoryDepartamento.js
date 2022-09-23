"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositoryDepartamento = void 0;
var departamento_1 = require("../classes/departamento");
var repositoryDepartamento = /** @class */ (function () {
    function repositoryDepartamento() {
        this.connection = { execute: function (query) { } };
    }
    repositoryDepartamento.prototype.insert = function (departamento) {
        var query = "insert into Departamento (nome, sigla) values (".concat(departamento.getNome(), ",").concat(departamento.getSigla(), " )");
    };
    repositoryDepartamento.prototype.getAll = function () {
        var departamentos = [];
        var query = "select * from Departamento";
        var resultSet = this.connection.execute(query);
        while (resultSet) {
            var departamento = new departamento_1.Departamento(resultSet.idDepartamento, resultSet.nome, resultSet.sigla);
            departamentos.push(departamento);
        }
        return departamentos;
    };
    repositoryDepartamento.prototype.getByID = function (id) {
        var query = "select * from Departamento where idDepartamento = ".concat(id);
        var resultSet = this.connection.execute(query);
        var departamento = new departamento_1.Departamento(resultSet.idDepartamento, resultSet.nome, resultSet.sigla);
        return departamento;
    };
    repositoryDepartamento.prototype.delete = function (dpto) {
        var id = dpto.getID();
        var query = "delete from Departamento where idDepartamento = ".concat(id);
    };
    repositoryDepartamento.prototype.update = function (dpto) {
        var query = "update departamento set nome = ".concat(dpto.getNome(), ", sigla = ").concat(dpto.getSigla, " where idDepartamento = ").concat(dpto.getID());
    };
    return repositoryDepartamento;
}());
exports.repositoryDepartamento = repositoryDepartamento;
