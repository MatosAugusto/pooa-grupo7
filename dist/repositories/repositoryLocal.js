"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositoryLocal = void 0;
var local_1 = require("../classes/local");
var repositoryLocal = /** @class */ (function () {
    function repositoryLocal() {
        this.connection = { execute: function (query) { } };
    }
    repositoryLocal.prototype.insert = function (local) {
        var query = "INSERT INTO LocalEvento (cep, logradouro, numero, bairro, cidade) VALUES (".concat(local.getCep(), ", ").concat(local.getLogradouro(), ", ").concat(local.getNumero(), ", ").concat(local.getNumero(), ", ").concat(local.getBairro(), ", ").concat(local.getCidade(), ")");
    };
    repositoryLocal.prototype.getAll = function () {
        var locais = [];
        var query = "SELECT * FROM LocalEvento";
        var resultSet = this.connection.execute(query);
        while (resultSet) {
            var local = new local_1.Local(resultSet.cep, resultSet.logradouro, resultSet.numero, resultSet.bairro, resultSet.cidade);
            locais.push(local);
        }
        return locais;
    };
    repositoryLocal.prototype.getById = function (cep) {
        var query = "SELECT * FROM LocalEvento WHERE cep = ".concat(cep);
        var resultSet = this.connection.execute(query);
        var local = new local_1.Local(resultSet.cep, resultSet.logradouro, resultSet.numero, resultSet.bairro, resultSet.cidade);
        return local;
    };
    repositoryLocal.prototype.delete = function (local) {
        var query = "DELETE FROM LocalEvento WHERE cep = ".concat(local.getCep());
    };
    repositoryLocal.prototype.update = function (local) {
        var query = "update LocalEvento set logradouro = ".concat(local.getLogradouro(), ", numero = ").concat(local.getNumero, ", bairro = ").concat(local.getBairro, ", cidade = ").concat(local.getCidade, " where cep = ").concat(local.getCep());
    };
    return repositoryLocal;
}());
exports.repositoryLocal = repositoryLocal;
