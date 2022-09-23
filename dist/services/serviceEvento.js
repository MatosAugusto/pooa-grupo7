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
exports.serviceEvento = void 0;
var iIntegracao_1 = require("../interfaces/iIntegracao");
var repositoryEvento_1 = require("../repositories/repositoryEvento");
var repositoryUsuario_1 = require("../repositories/repositoryUsuario");
var repositoryAluno_1 = require("../repositories/repositoryAluno");
var repositoryLocal_1 = require("../repositories/repositoryLocal");
var serviceEvento = /** @class */ (function () {
    function serviceEvento() {
        this.eventoRepository = new repositoryEvento_1.repositoryEvento();
        this.usuarioRepository = new repositoryUsuario_1.repositoryUsuario();
        this.alunoRepository = new repositoryAluno_1.repositoryAluno();
        this.localRepository = new repositoryLocal_1.repositoryLocal();
    }
    serviceEvento.prototype.criarEvento = function (evento) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.eventoRepository.insert(evento)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    serviceEvento.prototype.deletarEvento = function (evento) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.eventoRepository.delete(evento)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    serviceEvento.prototype.buscarEventos = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.eventoRepository.getAll()];
            });
        });
    };
    serviceEvento.prototype.buscarEventoPorNome = function (nome) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.eventoRepository.getByNome(nome)];
            });
        });
    };
    serviceEvento.prototype.adicionarPalestrante = function (usuario, evento) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.usuarioRepository.getByCpf(usuario.getCpf())) {
                    throw new Error("Usuário não encontrado!");
                }
                this.eventoRepository.insertPalestrante(usuario, evento);
                evento.insertPalestrante(usuario);
                return [2 /*return*/];
            });
        });
    };
    serviceEvento.prototype.adicionarOrganizador = function (aluno, evento) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.alunoRepository.getByID(aluno.getRA())) {
                    throw new Error("Aluno não encontrado!");
                }
                if (!(0, iIntegracao_1.checkStatusAluno)(aluno)) {
                    throw new Error("Aluno não está cumprindo os requisitos!");
                }
                this.eventoRepository.insertOrganizador(aluno, evento);
                evento.insertOrganizador(aluno);
                return [2 /*return*/];
            });
        });
    };
    serviceEvento.prototype.adicionarGrupoOrganizador = function (grupo, evento) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.alunoRepository.getByID(grupo.getID())) {
                    throw new Error("Grupo não encontrado!");
                }
                evento.insertGrupoResponsavel(grupo);
                this.eventoRepository.update(evento);
                return [2 /*return*/];
            });
        });
    };
    serviceEvento.prototype.removerGrupoOrganizador = function (grupo, evento) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.alunoRepository.getByID(grupo.getID())) {
                    throw new Error("Grupo não encontrado!");
                }
                evento.removeGrupoResponsavel(grupo);
                this.eventoRepository.update(evento);
                return [2 /*return*/];
            });
        });
    };
    serviceEvento.prototype.alterarLocal = function (local, evento) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.localRepository.getById(local.getCep())) {
                    throw new Error("Local não encontrado!");
                }
                this.alterarLocal(local, evento);
                evento.setLocal(local);
                return [2 /*return*/];
            });
        });
    };
    serviceEvento.prototype.alterarData = function (data, evento) {
        return __awaiter(this, void 0, void 0, function () {
            var dataAtual;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataAtual = new Date();
                        return [4 /*yield*/, !(data < dataAtual)];
                    case 1:
                        if (_a.sent()) {
                            throw new Error("Data anterior a atual!");
                        }
                        this.alterarData(data, evento);
                        evento.setDate(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    serviceEvento.prototype.alterarStatus = function (status, evento) {
        return __awaiter(this, void 0, void 0, function () {
            var dataAtual, status1, status2, status3, status4;
            return __generator(this, function (_a) {
                dataAtual = new Date();
                status1 = "A_ACONTECER";
                status2 = "ACONTECENDO";
                status3 = "CANCELADO";
                status4 = "FINALIZADO";
                //se a data do evento for antes da data atual, não será possivel atribuir "A_ACONTECER"
                if (status == status1) {
                    if (evento.getData() < dataAtual) {
                        throw new Error("Esse evento não pode receber esse status!");
                    }
                }
                //se a data atual não for a mesma da data do evento, não será possivel atribuir "ACONTECENDO"
                if (status == status2) {
                    if (!(evento.getData() == dataAtual)) {
                        throw new Error("Esse evento não pode receber esse status!");
                    }
                }
                //se a data do evento ainda não tiver passado, não será possivel atribuir "FINALIZADO"
                if (status == status4) {
                    if (evento.getData() > dataAtual) {
                        throw new Error("Esse evento não pode receber esse status!");
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    return serviceEvento;
}());
exports.serviceEvento = serviceEvento;
