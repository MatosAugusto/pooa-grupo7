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
exports.serviceAluno = void 0;
var serviceProcessoSeletivo_1 = require("./serviceProcessoSeletivo");
var repositoryAluno_1 = require("../repositories/repositoryAluno");
var repositoryPerfil_1 = require("../repositories/repositoryPerfil");
var repositoryProcessoSeletivo_1 = require("../repositories/repositoryProcessoSeletivo");
var repositoryUsuario_1 = require("../repositories/repositoryUsuario");
var serviceAluno = /** @class */ (function () {
    function serviceAluno() {
        this.alunoRepository = new repositoryAluno_1.repositoryAluno();
        this.perfilRepository = new repositoryPerfil_1.repositoryPerfil();
        this.psService = new serviceProcessoSeletivo_1.serviceProcessoSeletivo();
        this.psRepository = new repositoryProcessoSeletivo_1.repositoryProcessoSeletivo();
        this.usuarioRepository = new repositoryUsuario_1.repositoryUsuario();
    }
    serviceAluno.prototype.adicionarAluno = function (aluno) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.usuarioRepository.getByCpf(aluno.getCpf())) {
                    throw new Error("Usuário não encontrado!");
                }
                this.alunoRepository.insert(aluno);
                return [2 /*return*/];
            });
        });
    };
    serviceAluno.prototype.buscarAlunos = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.alunoRepository.getAll()];
            });
        });
    };
    serviceAluno.prototype.buscarAlunoPorRA = function (ra) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.alunoRepository.getByID(ra)];
            });
        });
    };
    serviceAluno.prototype.deletarAluno = function (aluno) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.usuarioRepository.getByCpf(aluno.getCpf())) {
                    throw new Error("Usuário não encontrado!");
                }
                this.alunoRepository.delete(aluno);
                return [2 /*return*/];
            });
        });
    };
    serviceAluno.prototype.mudarAluno = function (aluno) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.usuarioRepository.getByCpf(aluno.getCpf())) {
                    throw new Error("Usuário não encontrado!");
                }
                this.alunoRepository.update(aluno);
                return [2 /*return*/];
            });
        });
    };
    serviceAluno.prototype.inscreverNoPS = function (aluno, ps) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.alunoRepository.getByID(aluno.getRA())) {
                    throw new Error("Aluno não encontrado!");
                }
                if (!this.perfilRepository.getByName(aluno.getPerfil().getNome())) {
                    throw new Error("Perfil não encontrado!");
                }
                if (!this.psService.checarAluno(aluno)) {
                    throw new Error("Aluno não está cumprindo os requisitos!");
                }
                this.psRepository.insertAluno(aluno, ps, 0);
                ps.getEtapas()[0].insertParticipante(aluno);
                return [2 /*return*/];
            });
        });
    };
    return serviceAluno;
}());
exports.serviceAluno = serviceAluno;