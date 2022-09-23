"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Local = void 0;
var Local = /** @class */ (function () {
    function Local(cep, logradouro, numero, bairro, cidade) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
    }
    Local.prototype.getCep = function () {
        return this.cep;
    };
    Local.prototype.getLogradouro = function () {
        return this.logradouro;
    };
    Local.prototype.getNumero = function () {
        return this.numero;
    };
    Local.prototype.getBairro = function () {
        return this.bairro;
    };
    Local.prototype.getCidade = function () {
        return this.cidade;
    };
    Local.prototype.setCep = function (cep) {
        this.cep = cep;
    };
    Local.prototype.setLogradouro = function (logradouro) {
        this.logradouro = logradouro;
    };
    Local.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Local.prototype.setBairro = function (bairro) {
        this.bairro = bairro;
    };
    Local.prototype.setCidade = function (cidade) {
        this.cidade = cidade;
    };
    return Local;
}());
exports.Local = Local;
