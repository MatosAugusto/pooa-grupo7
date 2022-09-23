"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(nome, cpf, dataNascimento, senha, perfil) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = new Date(dataNascimento);
        this.senha = senha;
        this.perfil = perfil;
    }
    Usuario.prototype.getNome = function () {
        return this.nome;
    };
    Usuario.prototype.getCpf = function () {
        return this.cpf;
    };
    Usuario.prototype.getDataNascimento = function () {
        return this.dataNascimento;
    };
    Usuario.prototype.getSenha = function () {
        return this.senha;
    };
    Usuario.prototype.getPerfil = function () {
        return this.perfil;
    };
    Usuario.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Usuario.prototype.setCpf = function (cpf) {
        this.cpf = cpf;
    };
    Usuario.prototype.setDataNascimento = function (data) {
        this.dataNascimento = data;
    };
    Usuario.prototype.setSenha = function (senha) {
        this.senha = senha;
    };
    Usuario.prototype.setPerfil = function (perfil) {
        this.perfil = perfil;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
