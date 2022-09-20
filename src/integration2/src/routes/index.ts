import { Application } from "express";
import { productRouter } from "./product-router";
import { Router } from "express";

export const useRoutes = (app: Application) => {
    const apiRouter = Router();
    apiRouter.use('/products', productRouter);
    app.use('/api/v1', apiRouter);
}