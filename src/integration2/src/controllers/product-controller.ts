import { ok } from 'assert';
import {Request, Response} from 'express';
import { Product, productModel } from '../models/products';
import { badRequest, internalServerError, notFound, validateNumber } from '../services/utils';

const insertProduct = (req: Request, res: Response) => {
    {
        const product = req.body;
        if(!product)
            return badRequest(res, "Produto Inválido");
        if(!product.name)
            return badRequest(res, "Informe o nome do produto");
        if(validateNumber(product.price))
            return badRequest(res, "Informe o price do produto");  
    }
    const product = req.body as Product;
    productModel.insertProduct(product)
        .then(product => {
            res.json({
                product
            })
        })
        .catch(err => internalServerError(res, err))
}

const listProducts = (req: Request, res: Response) =>{
    productModel.listProducts()
    .then(product => {
        res.json(product)
    })
    .catch(err => internalServerError(res, err));
}

const getProduct = (req: Request, res: Response) =>{
    const id = parseInt(req.params.id);
    {
        if(validateNumber(id))
            return badRequest(res, 'id invalido');
    }
    productModel.getProduct(id)
    .then(product => {
        if(product)
            res.json(product);
        else
            return notFound(res);
    })
    .catch(err => internalServerError(res, err));
}


const deleteProduct = async (req: Request, res: Response) =>{
    const id = parseInt(req.params.id);
    {
        if(validateNumber(id))
            return badRequest(res, 'id invalido');
        
        const productSaved = await productModel.getProduct(id);
        if(!productSaved)
            return notFound(res);
    }
    productModel.deleteProduct(id)
    .then(() => ok(res))
    .catch(err => internalServerError(res, err));
}

const updateProduct = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    {
        if(validateNumber(id))
            return badRequest(res, 'id invalido');
        const product = req.body;
        if(!product)
            return badRequest(res, "Produto Inválido");
        
        const productSaved = await productModel.getProduct(id);
        if(!productSaved)
            return notFound(res);
    }
    const product = req.body as Product;
    productModel.updateProduct(product)
        .then(product => {
            res.json({
                product
            })
        })
        .catch(err => internalServerError(res, err))
}

export const productController = {
    insertProduct,
    listProducts,
    getProduct,
    deleteProduct,
    updateProduct
}