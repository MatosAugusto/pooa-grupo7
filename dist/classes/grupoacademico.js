"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrupoAcademico = void 0;
var GrupoAcademico = /** @class */ (function () {
    function GrupoAcademico(id, nome, descricao, dataCriacao, status, departamento, responsavel, representantes, limiteParticipantes, participantes, listaEventos, eventosParticipados) {
        this.status = true;
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dataCriacao = new Date(dataCriacao);
        this.status = status;
        this.departamento = departamento;
        this.responsavel = responsavel;
        this.representantes = representantes;
        this.limiteParticipantes = limiteParticipantes;
        this.participantes = participantes;
        this.listaEventos = listaEventos;
        this.eventosParticipados = eventosParticipados;
    }
    GrupoAcademico.prototype.getID = function () {
        return this.id;
    };
    GrupoAcademico.prototype.getNome = function () {
        return this.nome;
    };
    GrupoAcademico.prototype.getDescricao = function () {
        return this.descricao;
    };
    GrupoAcademico.prototype.getDataCriacao = function () {
        return this.dataCriacao;
    };
    GrupoAcademico.prototype.getStatus = function () {
        return this.status;
    };
    GrupoAcademico.prototype.getDepartamento = function () {
        return this.departamento;
    };
    GrupoAcademico.prototype.getResponsavel = function () {
        return this.responsavel;
    };
    GrupoAcademico.prototype.getRepresentantes = function () {
        return this.representantes;
    };
    GrupoAcademico.prototype.getLimiteParticipantes = function () {
        return this.limiteParticipantes;
    };
    GrupoAcademico.prototype.getParticipantes = function () {
        return this.participantes;
    };
    GrupoAcademico.prototype.getListaEventos = function () {
        return this.listaEventos;
    };
    GrupoAcademico.prototype.getEventosParticipados = function () {
        return this.eventosParticipados;
    };
    GrupoAcademico.prototype.setID = function (id) {
        this.id = id;
    };
    GrupoAcademico.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    GrupoAcademico.prototype.setDescricao = function (descricao) {
        this.descricao = descricao;
    };
    GrupoAcademico.prototype.changeStatus = function () {
        if (this.status) {
            this.status = false;
        }
        else {
            this.status = true;
        }
    };
    GrupoAcademico.prototype.setDepartamento = function (departamento) {
        this.departamento = departamento;
    };
    GrupoAcademico.prototype.setResponsavel = function (usuario) {
        this.responsavel = usuario;
    };
    GrupoAcademico.prototype.insertRepresentante = function (aluno) {
        this.representantes.push(aluno);
    };
    GrupoAcademico.prototype.removeRepresentante = function (aluno) {
        var index = this.representantes.indexOf(aluno);
        this.representantes.splice(index, 1);
    };
    GrupoAcademico.prototype.setLimiteParticipantes = function (limiteParticipantes) {
        this.limiteParticipantes = limiteParticipantes;
    };
    GrupoAcademico.prototype.insertParticipante = function (aluno) {
        this.participantes.push(aluno);
    };
    GrupoAcademico.prototype.removeParticipante = function (aluno) {
        var index = this.participantes.indexOf(aluno);
        this.participantes.splice(index, 1);
    };
    GrupoAcademico.prototype.insertEvento = function (evento) {
        this.listaEventos.push(evento);
    };
    GrupoAcademico.prototype.removeEvento = function (evento) {
        var index = this.listaEventos.indexOf(evento);
        this.listaEventos.splice(index, 1);
    };
    GrupoAcademico.prototype.insertEventoParticipado = function (evento) {
        this.eventosParticipados.push(evento);
    };
    GrupoAcademico.prototype.removeEventoParticipado = function (evento) {
        var index = this.eventosParticipados.indexOf(evento);
        this.eventosParticipados.splice(index, 1);
    };
    return GrupoAcademico;
}());
exports.GrupoAcademico = GrupoAcademico;
