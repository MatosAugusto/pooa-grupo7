"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perfil = void 0;
var Perfil = /** @class */ (function () {
    function Perfil(nome, criadoEm, alteradoEm, acoes) {
        this.nome = nome;
        this.criadoEm = new Date(criadoEm);
        this.alteradoEm = new Date(alteradoEm);
        this.acoes = acoes;
    }
    Perfil.prototype.podeExecutar = function (acao) {
        var podeAcessar = acao.getNome() === "CRIAR_EVENTO" ||
            acao.getNome() === "DESATIVAR_GRUPO";
        if (podeAcessar) {
            return true;
        }
        return false;
    };
    Perfil.prototype.getNome = function () {
        return this.nome;
    };
    Perfil.prototype.getCriadoEm = function () {
        return this.criadoEm;
    };
    Perfil.prototype.getAlteradoEm = function () {
        return this.alteradoEm;
    };
    Perfil.prototype.getAcoes = function () {
        return this.acoes;
    };
    Perfil.prototype.insertAcao = function (acao) {
        this.acoes.push(acao);
    };
    Perfil.prototype.removeAcao = function (acao) {
        var index = this.acoes.indexOf(acao);
        this.acoes.splice(index, 1);
    };
    return Perfil;
}());
exports.Perfil = Perfil;
