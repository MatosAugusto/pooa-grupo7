"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceGrupoAcademico = void 0;
var acao_1 = require("../classes/acao");
var repositoryGrupoAcademico_1 = require("../repositories/repositoryGrupoAcademico");
var serviceGrupoAcademico = /** @class */ (function () {
    function serviceGrupoAcademico() {
        this.repositoryGrupoAcad = new repositoryGrupoAcademico_1.repositoryGrupoAcademico();
    }
    serviceGrupoAcademico.prototype.criarGrupo = function (grupo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.repositoryGrupoAcad.getById(grupo.getID())) {
                    throw new Error("Grupo já cadastrado!");
                }
                this.repositoryGrupoAcad.insert(grupo);
                return [2 /*return*/];
            });
        });
    };
    serviceGrupoAcademico.prototype.deletarGrupo = function (grupo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.repositoryGrupoAcad.delete(grupo);
                return [2 /*return*/];
            });
        });
    };
    serviceGrupoAcademico.prototype.buscarGrupos = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.repositoryGrupoAcad.getAll()];
            });
        });
    };
    serviceGrupoAcademico.prototype.getByID = function (idGrupo, user) {
        return __awaiter(this, void 0, void 0, function () {
            var buscarGrupo, grupo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buscarGrupo = new acao_1.Acao("BUSCAR_GRUPO", "001");
                        if (!user.getPerfil().podeExecutar(buscarGrupo)) {
                            throw new Error("Você não pode realizar essa ação!");
                        }
                        return [4 /*yield*/, this.repositoryGrupoAcad.getById(idGrupo)];
                    case 1:
                        grupo = _a.sent();
                        return [2 /*return*/, grupo];
                }
            });
        });
    };
    serviceGrupoAcademico.prototype.getByNome = function (nomeGrupo, user) {
        return __awaiter(this, void 0, void 0, function () {
            var buscarGrupo, grupo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buscarGrupo = new acao_1.Acao("BUSCAR_GRUPO", "001");
                        if (!user.getPerfil().podeExecutar(buscarGrupo)) {
                            throw new Error("Você não pode realizar essa ação!");
                        }
                        return [4 /*yield*/, this.repositoryGrupoAcad.getByNome(nomeGrupo)];
                    case 1:
                        grupo = _a.sent();
                        return [2 /*return*/, grupo];
                }
            });
        });
    };
    serviceGrupoAcademico.prototype.getParticipantes = function (idGrupo, user) {
        return __awaiter(this, void 0, void 0, function () {
            var buscarParticipantes, participantes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buscarParticipantes = new acao_1.Acao("BUSCAR_PARTICIPANTES", "002");
                        if (!user.getPerfil().podeExecutar(buscarParticipantes)) {
                            throw new Error("Você não pode realizar essa ação!");
                        }
                        return [4 /*yield*/, this.repositoryGrupoAcad.getParticipantes(idGrupo)];
                    case 1:
                        participantes = _a.sent();
                        return [2 /*return*/, participantes];
                }
            });
        });
    };
    serviceGrupoAcademico.prototype.getResponsavel = function (idGrupo, user) {
        return __awaiter(this, void 0, void 0, function () {
            var buscarResponsavel, responsavel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buscarResponsavel = new acao_1.Acao("BUSCAR_RESPONSAVEL", "003");
                        if (!user.getPerfil().podeExecutar(buscarResponsavel)) {
                            throw new Error("Você não pode realizar essa ação!");
                        }
                        return [4 /*yield*/, this.repositoryGrupoAcad.getResponsavel(idGrupo)];
                    case 1:
                        responsavel = _a.sent();
                        return [2 /*return*/, responsavel];
                }
            });
        });
    };
    serviceGrupoAcademico.prototype.getEventosOrganizados = function (idGrupo, user) {
        return __awaiter(this, void 0, void 0, function () {
            var buscarEventos, eventos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buscarEventos = new acao_1.Acao("BUSCAR_EVENTOS", "004");
                        if (!user.getPerfil().podeExecutar(buscarEventos)) {
                            throw new Error("Você não pode realizar essa ação!");
                        }
                        return [4 /*yield*/, this.repositoryGrupoAcad.getEventosOrganizados(idGrupo)];
                    case 1:
                        eventos = _a.sent();
                        return [2 /*return*/, eventos];
                }
            });
        });
    };
    serviceGrupoAcademico.prototype.getEventosParticipados = function (idGrupo, user) {
        return __awaiter(this, void 0, void 0, function () {
            var buscarEventos, eventos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buscarEventos = new acao_1.Acao("BUSCAR_EVENTOS", "004");
                        if (!user.getPerfil().podeExecutar(buscarEventos)) {
                            throw new Error("Você não pode realizar essa ação!");
                        }
                        return [4 /*yield*/, this.repositoryGrupoAcad.getEventosParticipados(idGrupo)];
                    case 1:
                        eventos = _a.sent();
                        return [2 /*return*/, eventos];
                }
            });
        });
    };
    serviceGrupoAcademico.prototype.getMembrosAtivos = function (idGrupo, user) {
        return __awaiter(this, void 0, void 0, function () {
            var buscarMembros, membros;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buscarMembros = new acao_1.Acao("BUSCAR_MEMBROS_ATIVOS", "005");
                        if (!user.getPerfil().podeExecutar(buscarMembros)) {
                            throw new Error("Você não pode realizar essa ação!");
                        }
                        return [4 /*yield*/, this.repositoryGrupoAcad.getMembrosAtivos(idGrupo)];
                    case 1:
                        membros = _a.sent();
                        return [2 /*return*/, membros];
                }
            });
        });
    };
    return serviceGrupoAcademico;
}());
exports.serviceGrupoAcademico = serviceGrupoAcademico;
