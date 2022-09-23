"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositoryAcoes = void 0;
var acao_1 = require("../classes/acao");
var repositoryAcoes = /** @class */ (function () {
    function repositoryAcoes() {
        this.connection = { execute: function (query) { } };
    }
    repositoryAcoes.prototype.insert = function (acao) {
        var query = "insert into acoes (nome, codigo) values (".concat(acao.getNome(), ",").concat(acao.getCodigo(), " )");
    };
    repositoryAcoes.prototype.getAll = function () {
        var acoes = [];
        var query = "select * from acoes";
        var resultSet = this.connection.execute(query);
        while (resultSet) {
            var acao = new acao_1.Acao(resultSet.nome, resultSet.codigo);
            acoes.push(acao);
        }
        return acoes;
    };
    repositoryAcoes.prototype.getByCodigo = function (codigo) {
        var query = "select * from acoes where codigo = ".concat(codigo);
        var resultSet = this.connection.execute(query);
        var acao = new acao_1.Acao(resultSet.codigo, resultSet.nome);
        return acao;
    };
    repositoryAcoes.prototype.delete = function (acao) {
        var codigo = acao.getCodigo();
        var query = "delete from acoes where codigo = ".concat(codigo);
    };
    repositoryAcoes.prototype.update = function (acao) {
        var query = "update acoes set nome = ".concat(acao.getNome(), " where codigo = ").concat(acao.getCodigo());
    };
    return repositoryAcoes;
}());
exports.repositoryAcoes = repositoryAcoes;
