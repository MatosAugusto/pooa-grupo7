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
exports.productController = void 0;
var assert_1 = require("assert");
var products_1 = require("../models/products");
var utils_1 = require("../services/utils");
var insertProduct = function (req, res) {
    {
        var product_1 = req.body;
        if (!product_1)
            return (0, utils_1.badRequest)(res, "Produto Inválido");
        if (!product_1.name)
            return (0, utils_1.badRequest)(res, "Informe o nome do produto");
        if ((0, utils_1.validateNumber)(product_1.price))
            return (0, utils_1.badRequest)(res, "Informe o price do produto");
    }
    var product = req.body;
    products_1.productModel.insertProduct(product)
        .then(function (product) {
        res.json({
            product: product
        });
    })
        .catch(function (err) { return (0, utils_1.internalServerError)(res, err); });
};
var listProducts = function (req, res) {
    products_1.productModel.listProducts()
        .then(function (product) {
        res.json(product);
    })
        .catch(function (err) { return (0, utils_1.internalServerError)(res, err); });
};
var getProduct = function (req, res) {
    var id = parseInt(req.params.id);
    {
        if ((0, utils_1.validateNumber)(id))
            return (0, utils_1.badRequest)(res, 'id invalido');
    }
    products_1.productModel.getProduct(id)
        .then(function (product) {
        if (product)
            res.json(product);
        else
            return (0, utils_1.notFound)(res);
    })
        .catch(function (err) { return (0, utils_1.internalServerError)(res, err); });
};
var deleteProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, productSaved;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = parseInt(req.params.id);
                if ((0, utils_1.validateNumber)(id))
                    return [2 /*return*/, (0, utils_1.badRequest)(res, 'id invalido')];
                return [4 /*yield*/, products_1.productModel.getProduct(id)];
            case 1:
                productSaved = _a.sent();
                if (!productSaved)
                    return [2 /*return*/, (0, utils_1.notFound)(res)];
                products_1.productModel.deleteProduct(id)
                    .then(function () { return (0, assert_1.ok)(res); })
                    .catch(function (err) { return (0, utils_1.internalServerError)(res, err); });
                return [2 /*return*/];
        }
    });
}); };
var updateProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, product_2, productSaved, product;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = parseInt(req.params.id);
                if ((0, utils_1.validateNumber)(id))
                    return [2 /*return*/, (0, utils_1.badRequest)(res, 'id invalido')];
                product_2 = req.body;
                if (!product_2)
                    return [2 /*return*/, (0, utils_1.badRequest)(res, "Produto Inválido")];
                return [4 /*yield*/, products_1.productModel.getProduct(id)];
            case 1:
                productSaved = _a.sent();
                if (!productSaved)
                    return [2 /*return*/, (0, utils_1.notFound)(res)];
                product = req.body;
                products_1.productModel.updateProduct(product)
                    .then(function (product) {
                    res.json({
                        product: product
                    });
                })
                    .catch(function (err) { return (0, utils_1.internalServerError)(res, err); });
                return [2 /*return*/];
        }
    });
}); };
exports.productController = {
    insertProduct: insertProduct,
    listProducts: listProducts,
    getProduct: getProduct,
    deleteProduct: deleteProduct,
    updateProduct: updateProduct
};
