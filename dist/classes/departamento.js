"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Departamento = void 0;
var Departamento = /** @class */ (function () {
    function Departamento(id, nome, sigla) {
        this.id = id;
        this.nome = nome;
        this.sigla = sigla;
    }
    Departamento.prototype.getID = function () {
        return this.id;
    };
    Departamento.prototype.getNome = function () {
        return this.nome;
    };
    Departamento.prototype.getSigla = function () {
        return this.sigla;
    };
    Departamento.prototype.setID = function (id) {
        this.id = id;
    };
    Departamento.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Departamento.prototype.setSigla = function (sigla) {
        this.sigla = sigla;
    };
    return Departamento;
}());
exports.Departamento = Departamento;
