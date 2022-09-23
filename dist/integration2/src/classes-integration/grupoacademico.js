"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrupoAcademico = void 0;
var GrupoAcademico = /** @class */ (function () {
    function GrupoAcademico(id, nome, descricao, dataCriacao, status, idDepartamento, responsavel, representantes, limiteParticipantes, participantes, listaEventos, eventosParticipados) {
        this.idGrupo = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dataCriacao = new Date(dataCriacao);
        this.statusGrupo = status;
        //this.departamento = departamento;
        this.idDepartamento = idDepartamento;
        this.cpfResponsavel = responsavel;
        this.representantes = representantes;
        this.limiteParticipantes = limiteParticipantes;
        this.participantes = participantes;
        this.listaEventos = listaEventos;
        this.eventosParticipados = eventosParticipados;
    }
    GrupoAcademico.prototype.getID = function () {
        return this.idGrupo;
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
        return this.statusGrupo;
    };
    // public getDepartamento(){
    //     return this.departamento.getID();
    // }
    // public getResponsavel(){
    //     return this.responsavel.getCpf();
    // }
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
        this.idGrupo = id;
    };
    GrupoAcademico.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    GrupoAcademico.prototype.setDescricao = function (descricao) {
        this.descricao = descricao;
    };
    // public changeStatus(){
    //     if(this.status){
    //         this.status = false;
    //     }else{
    //         this.status = true;
    //     }
    // }
    // public setDepartamento(departamento: Departamento){
    //     this.departamento = departamento;
    // }
    // public setResponsavel(usuario: Usuario){
    //     this.responsavel=usuario;
    // }    
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
