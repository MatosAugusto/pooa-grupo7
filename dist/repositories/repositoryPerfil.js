"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositoryPerfil = void 0;
var perfil_1 = require("../classes/perfil");
var repositoryPerfil = /** @class */ (function () {
    function repositoryPerfil() {
        this.connection = { execute: function (query) { } };
    }
    repositoryPerfil.prototype.insert = function (perfil) {
        var query = "insert into perfil (nome, criadoEm, alteradoEm) values (".concat(perfil.getNome(), ",").concat(perfil.getCriadoEm(), ",").concat(perfil.getAlteradoEm(), ")");
    };
    repositoryPerfil.prototype.getAll = function () {
        var perfis = [];
        var query = "select * from perfil";
        var resultSet = this.connection.execute(query);
        while (resultSet) {
            var perfil = new perfil_1.Perfil(resultSet.nome, resultSet.criadoEm, resultSet.alteradoEm, resultSet.acoes);
            perfis.push(perfil);
        }
        return perfis;
    };
    repositoryPerfil.prototype.getByName = function (nome) {
        var query = "select * from perfil where nome = ".concat(nome);
        var resultSet = this.connection.execute(query);
        var perfil = new perfil_1.Perfil(resultSet.nome, resultSet.criadoEm, resultSet.alteradoEm, resultSet.acoes);
        return perfil;
    };
    repositoryPerfil.prototype.delete = function (perfil) {
        var nome = perfil.getNome();
        var query = "delete from perfil where nome = ".concat(nome);
    };
    repositoryPerfil.prototype.update = function (perfil) {
        var query = "update Perfil set alteradoEm = ".concat(perfil.getAlteradoEm(), " where nome = ").concat(perfil.getNome());
    };
    return repositoryPerfil;
}());
exports.repositoryPerfil = repositoryPerfil;
