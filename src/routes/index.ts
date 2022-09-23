import { Application } from "express";
import { acaoRouter, eventoRouter, gpAcadRouter } from "./routes";
import { Router } from "express";

export const useRoutes = (app: Application) => {
    const apiRouter = Router();
    apiRouter.use('/acoes', acaoRouter);
    apiRouter.use('/grupoAcademico', gpAcadRouter);
    apiRouter.use('/evento', eventoRouter);
    app.use('/api/v1', apiRouter);
}