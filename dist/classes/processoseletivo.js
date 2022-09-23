"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessoSeletivo = void 0;
var ProcessoSeletivo = /** @class */ (function () {
    function ProcessoSeletivo(id, data, nroInscritos, nroVagas, nroAprovados, etapas) {
        this.id = id;
        this.data = new Date(data);
        this.nroInscritos = nroInscritos;
        this.nroVagas = nroVagas;
        this.nroAprovados = nroAprovados;
        this.etapas = etapas;
        this.etapaAtual = 0;
    }
    ProcessoSeletivo.prototype.getID = function () {
        return this.id;
    };
    ProcessoSeletivo.prototype.getData = function () {
        return this.data;
    };
    ProcessoSeletivo.prototype.getNroInscritos = function () {
        return this.nroInscritos;
    };
    ProcessoSeletivo.prototype.getNroVagas = function () {
        return this.nroVagas;
    };
    ProcessoSeletivo.prototype.getNroAprovados = function () {
        return this.nroAprovados;
    };
    ProcessoSeletivo.prototype.getEtapas = function () {
        return this.etapas;
    };
    ProcessoSeletivo.prototype.getEtapaAtual = function () {
        return this.etapaAtual;
    };
    ProcessoSeletivo.prototype.setID = function (id) {
        this.id = id;
    };
    ProcessoSeletivo.prototype.setData = function (data) {
        this.data = data;
    };
    ProcessoSeletivo.prototype.setNroInscritos = function (numero) {
        this.nroInscritos = numero;
    };
    ProcessoSeletivo.prototype.setNroVagas = function (numero) {
        this.nroVagas = numero;
    };
    ProcessoSeletivo.prototype.setNroAprovados = function (numero) {
        this.nroAprovados = numero;
    };
    ProcessoSeletivo.prototype.insertEtapa = function (etapa) {
        this.etapas.push(etapa);
    };
    ProcessoSeletivo.prototype.removeEtapa = function (etapa) {
        var index = this.etapas.indexOf(etapa);
        this.etapas.splice(index, 1);
    };
    return ProcessoSeletivo;
}());
exports.ProcessoSeletivo = ProcessoSeletivo;
