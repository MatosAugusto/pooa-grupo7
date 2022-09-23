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
exports.eventoController = void 0;
var eventos_model_1 = require("../models/eventos-model");
var utils_1 = require("../services/utils");
var insertEvento = function (req, res) {
    {
        var evento_1 = req.body;
        if (!evento_1)
            return (0, utils_1.badRequest)(res, "Ação Inválida");
    }
    var evento = req.body;
    eventos_model_1.eventoModel.insertEvento(evento)
        .then(function (evento) {
        res.json({
            evento: evento
        });
    })
        .catch(function (err) { return (0, utils_1.internalServerError)(res, err); });
};
var listEvento = function (req, res) {
    eventos_model_1.eventoModel.listEvento()
        .then(function (evento) {
        res.json(evento);
    })
        .catch(function (err) { return (0, utils_1.internalServerError)(res, err); });
};
var getEvento = function (req, res) {
    var id = req.params.id;
    {
        if (!id)
            return (0, utils_1.badRequest)(res, 'codigo invalido');
    }
    eventos_model_1.eventoModel.getEvento(id)
        .then(function (evento) {
        if (evento)
            res.json(evento);
        else
            return (0, utils_1.notFound)(res);
    })
        .catch(function (err) { return (0, utils_1.internalServerError)(res, err); });
};
var deleteEvento = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, eventoSaved;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, eventos_model_1.eventoModel.getEvento(id)];
            case 1:
                eventoSaved = _a.sent();
                if (!eventoSaved)
                    return [2 /*return*/, (0, utils_1.notFound)(res)];
                eventos_model_1.eventoModel.deleteEvento(id)
                    .then(function () { return res.sendStatus(200); })
                    .catch(function (err) { return (0, utils_1.internalServerError)(res, err); });
                return [2 /*return*/];
        }
    });
}); };
var updateEvento = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, evento_2, eventoSaved, evento;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                evento_2 = req.body;
                if (!evento_2)
                    return [2 /*return*/, (0, utils_1.badRequest)(res, "Ação Inválida")];
                return [4 /*yield*/, eventos_model_1.eventoModel.getEvento(id)];
            case 1:
                eventoSaved = _a.sent();
                if (!eventoSaved)
                    return [2 /*return*/, (0, utils_1.notFound)(res)];
                evento = req.body;
                eventos_model_1.eventoModel.updateEvento(evento, id)
                    .then(function (evento) {
                    res.json({
                        evento: evento
                    });
                })
                    .catch(function (err) { return (0, utils_1.internalServerError)(res, err); });
                return [2 /*return*/];
        }
    });
}); };
exports.eventoController = {
    insertEvento: insertEvento,
    listEvento: listEvento,
    getEvento: getEvento,
    deleteEvento: deleteEvento,
    updateEvento: updateEvento
};
