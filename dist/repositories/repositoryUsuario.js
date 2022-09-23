"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositoryUsuario = void 0;
var usuario_1 = require("../classes/usuario");
var repositoryUsuario = /** @class */ (function () {
    function repositoryUsuario() {
        this.connection = { execute: function (query) { } };
    }
    repositoryUsuario.prototype.insert = function (usuario) {
        var query = "insert into usuario (nome, cpf, dataNascimento, senha, perfil) values (".concat(usuario.getNome(), ",").concat(usuario.getCpf(), ",").concat(usuario.getDataNascimento(), ",").concat(usuario.getSenha(), ",").concat(usuario.getPerfil(), ")");
    };
    repositoryUsuario.prototype.getAll = function () {
        var usuarios = [];
        var query = "select * from usuario";
        var resultSet = this.connection.execute(query);
        while (resultSet) {
            var usuario = new usuario_1.Usuario(resultSet.nome, resultSet.cpf, resultSet.dataNascimento, resultSet.senha, resultSet.perfil);
            usuarios.push(usuario);
        }
        return usuarios;
    };
    repositoryUsuario.prototype.getByCpf = function (cpf) {
        var query = "select * from usuario where cpf = ".concat(cpf);
        var resultSet = this.connection.execute(query);
        var usuario = new usuario_1.Usuario(resultSet.nome, resultSet.cpf, resultSet.dataNascimento, resultSet.senha, resultSet.perfil);
        return usuario;
    };
    repositoryUsuario.prototype.delete = function (usuario) {
        var cpf = usuario.getCpf();
        var query = "delete from usuario where cpf = ".concat(cpf);
    };
    repositoryUsuario.prototype.update = function (usuario) {
        var query = "update Usuario set nome = ".concat(usuario.getNome(), ", dataNascimento = ").concat(usuario.getDataNascimento, ", senha = ").concat(usuario.getSenha, ", perfil = ").concat(usuario.getPerfil().getNome, " where cpf = ").concat(usuario.getCpf());
    };
    return repositoryUsuario;
}());
exports.repositoryUsuario = repositoryUsuario;
