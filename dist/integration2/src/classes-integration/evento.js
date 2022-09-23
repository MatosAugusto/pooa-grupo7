"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evento = void 0;
var Evento = /** @class */ (function () {
    function Evento(nome, data, status, horaInicio, horaFim, organizadores, cepLocal, local, palestrantes, grupoResponsavel) {
        this.status = "A_ACONTECER";
        this.cepLocal = cepLocal;
        this.nome = nome;
        this.dataCriacao = new Date(data);
        this.status = status;
        this.horaInicio = this.dataCriacao;
        this.horaFim = this.dataCriacao;
        this.horaInicio.setHours(horaInicio);
        this.horaFim.setHours(horaFim);
        this.organizadores = organizadores;
        this.local = local;
        this.palestrantes = palestrantes;
        this.gruposResponsaveis = grupoResponsavel;
    }
    Evento.prototype.getNome = function () {
        return this.nome;
    };
    Evento.prototype.getData = function () {
        return this.dataCriacao;
    };
    Evento.prototype.getStatus = function () {
        return this.status;
    };
    Evento.prototype.getHoraInicio = function () {
        return this.horaInicio;
    };
    Evento.prototype.getHoraFim = function () {
        return this.horaFim;
    };
    Evento.prototype.getOrganizadores = function () {
        return this.organizadores;
    };
    Evento.prototype.getLocal = function () {
        return this.local;
    };
    Evento.prototype.getPalestrantes = function () {
        return this.palestrantes;
    };
    Evento.prototype.getGruposResponsaveis = function () {
        return this.gruposResponsaveis;
    };
    Evento.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Evento.prototype.setDate = function (date) {
        this.dataCriacao = date;
    };
    Evento.prototype.setHoraInicio = function (horaInicio) {
        this.horaInicio = this.dataCriacao;
        this.horaInicio.setHours(horaInicio);
    };
    Evento.prototype.setHoraFim = function (horaFim) {
        this.horaFim = this.dataCriacao;
        this.horaFim.setHours(horaFim);
    };
    Evento.prototype.insertOrganizador = function (organizador) {
        this.organizadores.push(organizador);
    };
    Evento.prototype.removeOrganizador = function (organizador) {
        var index = this.organizadores.indexOf(organizador);
        this.organizadores.splice(index, 1);
    };
    Evento.prototype.setLocal = function (local) {
        this.local = local;
    };
    Evento.prototype.insertPalestrante = function (palestrante) {
        this.palestrantes.push(palestrante);
    };
    Evento.prototype.removePalestrante = function (palestrante) {
        var index = this.palestrantes.indexOf(palestrante);
        this.palestrantes.splice(index, 1);
    };
    Evento.prototype.insertGrupoResponsavel = function (grupo) {
        this.gruposResponsaveis.push(grupo);
    };
    Evento.prototype.removeGrupoResponsavel = function (grupo) {
        var index = this.gruposResponsaveis.indexOf(grupo);
        this.gruposResponsaveis.splice(index, 1);
    };
    return Evento;
}());
exports.Evento = Evento;
