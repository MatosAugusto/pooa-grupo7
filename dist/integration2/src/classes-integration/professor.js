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
exports.Professor = void 0;
var usuario_1 = require("./usuario");
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(nroUniversidade, departamento, statusBiblioteca, nome, cpf, dataNascimento, senha, perfil) {
        var _this = _super.call(this, nome, cpf, dataNascimento, senha, perfil) || this;
        _this.nroUniversidade = nroUniversidade;
        _this.departamento = departamento;
        _this.statusBiblioteca = statusBiblioteca;
        return _this;
    }
    Professor.prototype.getNroUniversidade = function () {
        return this.nroUniversidade;
    };
    Professor.prototype.getDepartamento = function () {
        return this.departamento;
    };
    Professor.prototype.getStatusBiblioteca = function () {
        return this.statusBiblioteca;
    };
    Professor.prototype.setNroUniversidade = function (numero) {
        this.nroUniversidade = numero;
    };
    Professor.prototype.setDepartamento = function (departamento) {
        this.departamento = departamento;
    };
    Professor.prototype.changeStatusBiblioteca = function () {
        if (this.statusBiblioteca) {
            this.statusBiblioteca = false;
        }
        else {
            this.statusBiblioteca = true;
        }
    };
    return Professor;
}(usuario_1.Usuario));
exports.Professor = Professor;
