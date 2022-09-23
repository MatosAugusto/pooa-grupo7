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
exports.serviceResponsavel = void 0;
var repositoryUsuario_1 = require("../repositories/repositoryUsuario");
var repositoryPerfil_1 = require("../repositories/repositoryPerfil");
var repositoryGrupoAcademico_1 = require("../repositories/repositoryGrupoAcademico");
var serviceResponsavel = /** @class */ (function () {
    function serviceResponsavel() {
        this.repositoryUsuario = new repositoryUsuario_1.repositoryUsuario();
        this.repositoryPerfil = new repositoryPerfil_1.repositoryPerfil();
        this.repositoryGrupoAcademico = new repositoryGrupoAcademico_1.repositoryGrupoAcademico();
        this.perfilProfessor = this.repositoryPerfil.getByName("PROFESSOR");
        this.perfilAluno = this.repositoryPerfil.getByName("ALUNO");
    }
    serviceResponsavel.prototype.adicionarResponsavel = function (grupo, responsavel) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.repositoryUsuario.getByCpf(responsavel.getCpf())) {
                    throw new Error("Usuário não cadastrado!");
                }
                if (!this.repositoryPerfil.getByName(responsavel.getPerfil().getNome())) {
                    throw new Error("Perfil não encontrado!");
                }
                //nesse caso o professor pode ser responsável por apenas um grupo acadêmico
                if (this.repositoryPerfil.getByName(responsavel.getPerfil().getNome()) != this.perfilProfessor) {
                    throw new Error("O usuário não pode ser Responsável!");
                }
                responsavel.setPerfil(this.repositoryPerfil.getByName("RESPONSAVEL"));
                grupo.setResponsavel(responsavel);
                this.repositoryUsuario.update(responsavel);
                this.repositoryGrupoAcademico.update(grupo);
                return [2 /*return*/];
            });
        });
    };
    serviceResponsavel.prototype.trocarResponsavel = function (grupo, responsavel) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.repositoryUsuario.getByCpf(responsavel.getCpf())) {
                    throw new Error("Usuário não cadastrado!");
                }
                if (!this.repositoryPerfil.getByName(responsavel.getPerfil().getNome())) {
                    throw new Error("Perfil não encontrado!");
                }
                if (this.repositoryPerfil.getByName(responsavel.getPerfil().getNome()) != this.perfilProfessor) {
                    throw new Error("O usuário não pode ser Responsável!");
                }
                grupo.getResponsavel().setPerfil(this.repositoryPerfil.getByName("PROFESSOR"));
                this.repositoryUsuario.update(grupo.getResponsavel());
                responsavel.setPerfil(this.repositoryPerfil.getByName("RESPONSAVEL"));
                grupo.setResponsavel(responsavel);
                this.repositoryUsuario.update(responsavel);
                this.repositoryGrupoAcademico.update(grupo);
                return [2 /*return*/];
            });
        });
    };
    serviceResponsavel.prototype.incluirParticipante = function (grupo, aluno) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.repositoryUsuario.getByCpf(aluno.getCpf())) {
                    throw new Error("Usuário não cadastrado!");
                }
                if (!this.repositoryPerfil.getByName(aluno.getPerfil().getNome())) {
                    throw new Error("Perfil não encontrado!");
                }
                if (this.repositoryPerfil.getByName(aluno.getPerfil().getNome()) != this.perfilAluno) {
                    throw new Error("O usuário não pode ser inserido no grupo acadêmico!");
                }
                grupo.insertParticipante(aluno);
                this.repositoryGrupoAcademico.update(grupo);
                return [2 /*return*/];
            });
        });
    };
    serviceResponsavel.prototype.removerParticipante = function (grupo, aluno) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.repositoryUsuario.getByCpf(aluno.getCpf())) {
                    throw new Error("Usuário não cadastrado!");
                }
                if (!this.repositoryPerfil.getByName(aluno.getPerfil().getNome())) {
                    throw new Error("Perfil não encontrado!");
                }
                grupo.removeParticipante(aluno);
                this.repositoryGrupoAcademico.update(grupo);
                return [2 /*return*/];
            });
        });
    };
    serviceResponsavel.prototype.mudarStatusGrupoAcademico = function (grupo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.repositoryGrupoAcademico.getById(grupo.getID())) {
                    throw new Error("Grupo não encontrado!");
                }
                grupo.changeStatus();
                this.repositoryGrupoAcademico.update(grupo);
                return [2 /*return*/];
            });
        });
    };
    serviceResponsavel.prototype.checkResponsavel = function (responsavel) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (responsavel.getPerfil().getNome() != "EM_DIA") {
                    throw new Error("Responsável inválido!");
                }
                return [2 /*return*/, true];
            });
        });
    };
    serviceResponsavel.prototype.mudarLimiteGrupoAcademico = function (grupo, limite) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.repositoryGrupoAcademico.getById(grupo.getID())) {
                    throw new Error("Grupo não encontrado!");
                }
                grupo.setLimiteParticipantes(limite);
                this.repositoryGrupoAcademico.update(grupo);
                return [2 /*return*/];
            });
        });
    };
    return serviceResponsavel;
}());
exports.serviceResponsavel = serviceResponsavel;
