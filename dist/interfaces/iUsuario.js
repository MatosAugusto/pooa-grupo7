"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usuario_1 = require("../classes/usuario");
var serviceUsuario_1 = require("../services/serviceUsuario");
var adiciona = function (nome, cpf, dataNascimento, senha, perfil) {
    var user = new usuario_1.Usuario(nome, cpf, dataNascimento, senha, perfil);
    var s = new serviceUsuario_1.serviceUsuario();
    s.adicionarUsuario(user);
};
