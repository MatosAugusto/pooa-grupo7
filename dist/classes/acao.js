"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acao = void 0;
var Acao = /** @class */ (function () {
    function Acao(nome, codigo) {
        this.nome = nome;
        this.codigo = codigo;
    }
    Acao.prototype.getNome = function () {
        return this.nome;
    };
    Acao.prototype.getCodigo = function () {
        return this.codigo;
    };
    Acao.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Acao.prototype.setCodigo = function (codigo) {
        this.codigo = codigo;
    };
    return Acao;
}());
exports.Acao = Acao;
