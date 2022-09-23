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
var serviceEvento_1 = require("../services/serviceEvento");
var controllerEvento = /** @class */ (function () {
    function controllerEvento() {
        this.serviceEvento = new serviceEvento_1.serviceEvento();
    }
    controllerEvento.prototype.criarEvento = function (evento) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.serviceEvento.criarEvento(evento)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    controllerEvento.prototype.deletarEvento = function (evento) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.serviceEvento.deletarEvento(evento)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    controllerEvento.prototype.buscarEventos = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.serviceEvento.buscarEventos()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    controllerEvento.prototype.buscarEventoPorNome = function (nome) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.serviceEvento.buscarEventoPorNome(nome)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    controllerEvento.prototype.adicionarPalestrante = function (usuario, evento) {
        this.serviceEvento.adicionarPalestrante(usuario, evento);
    };
    controllerEvento.prototype.adicionarOrganizador = function (organizador, evento) {
        this.serviceEvento.adicionarOrganizador(organizador, evento);
    };
    controllerEvento.prototype.adicionarGrupoOrganizador = function (grupo, evento) {
        this.serviceEvento.adicionarGrupoOrganizador(grupo, evento);
    };
    controllerEvento.prototype.removerGrupoOrganizador = function (grupo, evento) {
        this.serviceEvento.removerGrupoOrganizador(grupo, evento);
    };
    controllerEvento.prototype.alterarLocal = function (local, evento) {
        this.serviceEvento.alterarLocal(local, evento);
    };
    controllerEvento.prototype.alterarData = function (data, evento) {
        this.serviceEvento.alterarData(data, evento);
    };
    controllerEvento.prototype.alterarStatus = function (status, evento) {
        this.serviceEvento.alterarStatus(status, evento);
    };
    return controllerEvento;
}());
