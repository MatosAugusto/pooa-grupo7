"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRoutes = void 0;
var routes_1 = require("./routes");
var express_1 = require("express");
var useRoutes = function (app) {
    var apiRouter = (0, express_1.Router)();
    apiRouter.use('/acoes', routes_1.acaoRouter);
    apiRouter.use('/grupoAcademico', routes_1.gpAcadRouter);
    apiRouter.use('/evento', routes_1.eventoRouter);
    app.use('/api/v1', apiRouter);
};
exports.useRoutes = useRoutes;
