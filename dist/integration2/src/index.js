"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var routes_1 = require("./routes");
var body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
var PORT = process.env.PORT || 8091;
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
(0, routes_1.useRoutes)(app);
app.get('/', function (req, res) {
    res.json({
        msg: 'ok'
    });
});
app.listen(PORT, function () { return console.log('Servidor iniciado na porta ' + PORT); });
