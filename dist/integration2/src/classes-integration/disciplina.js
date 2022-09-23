"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disciplina = void 0;
var Disciplina = /** @class */ (function () {
    function Disciplina(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    Disciplina.prototype.getID = function () {
        return this.id;
    };
    Disciplina.prototype.getNome = function () {
        return this.nome;
    };
    Disciplina.prototype.setID = function (id) {
        this.id = id;
    };
    Disciplina.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    return Disciplina;
}());
exports.Disciplina = Disciplina;
