"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositoryProcessoSeletivo = void 0;
var processoseletivo_1 = require("../classes/processoseletivo");
var repositoryEtapa_1 = require("./repositoryEtapa");
var repositoryProcessoSeletivo = /** @class */ (function () {
    function repositoryProcessoSeletivo() {
        this.connection = { execute: function (query) { } };
    }
    repositoryProcessoSeletivo.prototype.insert = function (processo) {
        var query = "insert into ProcessoSeletivo (dataProcesso, nroInscritos, nroVagas, nroAprovados) values (".concat(processo.getData(), ", ").concat(processo.getNroInscritos(), ", ").concat(processo.getNroVagas(), ", ").concat(processo.getNroAprovados(), " )");
    };
    repositoryProcessoSeletivo.prototype.insertAluno = function (aluno, ps, nroEtapa) {
        var query = "insert into EtapaAluno (etapa, raAluno) values (".concat(ps.getEtapaAtual(), ", ").concat(aluno.getRA(), ")");
    };
    repositoryProcessoSeletivo.prototype.getAll = function () {
        var query = 'SELECT * FROM ProcessoSeletivo';
        var resultSet = this.connection.execute(query);
        var processos = [];
        while (resultSet) {
            var query2 = "SELECT * FROM EtapaProcesso WHERE processo = ".concat(resultSet.processo_id);
            var resultSet2 = this.connection.execute(query2);
            var etapas = [];
            var e = new repositoryEtapa_1.repositoryEtapa;
            while (resultSet2) {
                etapas.push(e.getById(resultSet2.etapa));
            }
            var ps = new processoseletivo_1.ProcessoSeletivo(resultSet.id, resultSet.data, resultSet.nroInscritos, resultSet.nroVagas, resultSet.nroAprovados, etapas);
            processos.push(ps);
        }
        return processos;
    };
    repositoryProcessoSeletivo.prototype.getById = function (id) {
        var query = "SELECT * FROM ProcessoSeletivo WHERE idProcesso = ".concat(id);
        var resultSet = this.connection.execute(query);
        var query2 = "SELECT * FROM EtapaProcesso WHERE processo = ".concat(id);
        var resultSet2 = this.connection.execute(query2);
        var etapas = [];
        var e = new repositoryEtapa_1.repositoryEtapa;
        while (resultSet2) {
            etapas.push(e.getById(resultSet2.etapa));
        }
        var ps = new processoseletivo_1.ProcessoSeletivo(resultSet.id, resultSet.data, resultSet.nroInscritos, resultSet.nroVagas, resultSet.nroAprovados, etapas);
        return ps;
    };
    repositoryProcessoSeletivo.prototype.delete = function (id) {
        var query = "DELETE FROM ProcessoSeletivo WHERE idProcesso = ".concat(id);
    };
    repositoryProcessoSeletivo.prototype.update = function (ps) {
        var query = "update ProcessoSeletivo set dataProcesso = ".concat(ps.getData(), ", nroInscritos = ").concat(ps.getNroInscritos, ", nroVagas = ").concat(ps.getNroVagas, ", nroAprovados = ").concat(ps.getNroAprovados, " where idProcesso = ").concat(ps.getID());
    };
    return repositoryProcessoSeletivo;
}());
exports.repositoryProcessoSeletivo = repositoryProcessoSeletivo;
