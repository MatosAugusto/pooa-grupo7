"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Etapa = void 0;
var Etapa = /** @class */ (function () {
    function Etapa(id, nome, descricao, participantes) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.participantes = participantes;
    }
    Etapa.prototype.getID = function () {
        return this.id;
    };
    Etapa.prototype.getNome = function () {
        return this.nome;
    };
    Etapa.prototype.getDescricao = function () {
        return this.descricao;
    };
    Etapa.prototype.getParticipantes = function () {
        return this.participantes;
    };
    Etapa.prototype.setID = function (id) {
        this.id = id;
    };
    Etapa.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Etapa.prototype.setDescricao = function (descricao) {
        this.descricao = descricao;
    };
    Etapa.prototype.insertParticipante = function (participante) {
        this.participantes.push(participante);
    };
    Etapa.prototype.removeParticipante = function (participante) {
        var index = this.participantes.indexOf(participante);
        this.participantes.splice(index, 1);
    };
    return Etapa;
}());
exports.Etapa = Etapa;
