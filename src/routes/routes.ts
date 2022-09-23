import { Router } from "express";
import { productController } from "../controllers-integration/product-controller";
import { productModel } from "../models/products";
import { acaoModel } from "../models/acoes-model";
import { acaoController } from "../controllers-integration/acoes-controller";
import { gpAcadController } from "../controllers-integration/grupo-academico-controller";
import { eventoController } from "../controllers-integration/evento-controller";

const productRouter = Router();
productRouter.post('/', productController.insertProduct);
productRouter.get('/', productController.listProducts);
productRouter.get('/:id', productController.getProduct);
productRouter.delete('/:id', productController.deleteProduct);
productRouter.put('/:id', productController.updateProduct);

const acaoRouter = Router();
acaoRouter.post('/', acaoController.insertAcao);
acaoRouter.get('/', acaoController.listAcao);
acaoRouter.get('/:id', acaoController.getAcao);
acaoRouter.delete('/:id', acaoController.deleteAcao);
acaoRouter.put('/:id', acaoController.updateAcao);

const gpAcadRouter = Router();
gpAcadRouter.post('/', gpAcadController.insertGrupoAcademico);
gpAcadRouter.get('/', gpAcadController.listGpAcademico);
gpAcadRouter.get('/:id', gpAcadController.getGrupoAcademico);
gpAcadRouter.delete('/:id', gpAcadController.deleteGrupoAcademico);
gpAcadRouter.put('/:id', gpAcadController.updateGrupoAcademico);
gpAcadRouter.put('/ativarGrupo/:id', gpAcadController.ativarGpAcademico);
gpAcadRouter.put('/desativarGrupo/:id', gpAcadController.desativarGpAcademico);
gpAcadRouter.put('/trocarResponsavel/:id', gpAcadController.trocarResponsavelGpAcademico);
gpAcadRouter.get('/buscarNome/:nome', gpAcadController.getGrupoAcademicoNome);

const eventoRouter = Router();
eventoRouter.post('/', eventoController.insertEvento);
eventoRouter.get('/', eventoController.listEvento);
eventoRouter.get('/:id', eventoController.getEvento);
eventoRouter.delete('/:id', eventoController.deleteEvento);
eventoRouter.put('/:id', eventoController.updateEvento);


export {
    productRouter,
    acaoRouter,
    gpAcadRouter,
    eventoRouter
}