"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var usuario_1 = require("./usuario");
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(RA, disciplinas, statusBiblioteca, nome, cpf, dataNascimento, senha, perfil) {
        var _this = _super.call(this, nome, cpf, dataNascimento, senha, perfil) || this;
        _this.RA = RA;
        _this.disciplinas = disciplinas;
        _this.statusBiblioteca = statusBiblioteca;
        return _this;
    }
    Aluno.prototype.getRA = function () {
        return this.RA;
    };
    Aluno.prototype.getDisciplinas = function () {
        return this.disciplinas;
    };
    Aluno.prototype.getStatusBiblioteca = function () {
        return this.statusBiblioteca;
    };
    Aluno.prototype.setRA = function (ra) {
        this.RA = ra;
    };
    Aluno.prototype.insertDisciplinas = function (disciplina) {
        this.disciplinas.push(disciplina);
    };
    Aluno.prototype.removeDisciplinas = function (disciplina) {
        var index = this.disciplinas.indexOf(disciplina);
        this.disciplinas.splice(index, 1);
    };
    // por conta do status ser um valor booleano, não há a necessidade de um set, apenas um change
    Aluno.prototype.changeStatusBiblioteca = function () {
        if (this.statusBiblioteca) {
            this.statusBiblioteca = false;
        }
        else {
            this.statusBiblioteca = true;
        }
    };
    return Aluno;
}(usuario_1.Usuario));
exports.Aluno = Aluno;
