import { ok } from 'assert';
import {Request, Response} from 'express';
import {acaoModel } from '../models/acoes-model';
import { Acao } from '../classes/acao';
import { badRequest, internalServerError, notFound, validateNumber } from '../services/utils';

const insertAcao = (req: Request, res: Response) => {
    {
        const acao = req.body;
        if(!acao)
            return badRequest(res, "Ação Inválida");
        if(!acao.nome)
            return badRequest(res, "Informe o nome da ação");
        if(!acao.codigo)
            return badRequest(res, "Informe o codigo da ação");  
    }
    const acao = req.body as Acao;
    acaoModel.insertAcao(acao)
        .then(acao => {
            res.json({
                acao
            })
        })
        .catch(err => internalServerError(res, err))
}

const listAcao = (req: Request, res: Response) =>{
    acaoModel.listAcao()
    .then(acao => {
        res.json(acao)
    })
    .catch(err => internalServerError(res, err));
}

const getAcao = (req: Request, res: Response) =>{
    const id = req.params.id;
    {
        if(!id)
            return badRequest(res, 'codigo invalido');
    }
    acaoModel.getAcao(id)
    .then(acao => {
        if(acao)
            res.json(acao);
        else
            return notFound(res);
    })
    .catch(err => internalServerError(res, err));
}


const deleteAcao = async (req: Request, res: Response) =>{
    const id = req.params.id;
    {   
        const acaoSaved = await acaoModel.getAcao(id);
        if(!acaoSaved)
            return notFound(res);
    }
    acaoModel.deleteAcao(id)
    .then(() => res.sendStatus(200))
    .catch(err => internalServerError(res, err));
}

const updateAcao = async (req: Request, res: Response) => {
    const id = req.params.id;
    {
        const acao = req.body;
        if(!acao)
            return badRequest(res, "Ação Inválida");
        
        const acaoSaved = await acaoModel.getAcao(id);
        if(!acaoSaved)
            return notFound(res);
    }
    const acao = req.body as Acao;
    acaoModel.updateAcao(acao, id)
        .then(acao => {
            res.json({
                acao
            })
        })
        .catch(err => internalServerError(res, err))
}

export const acaoController = {
    insertAcao,
    listAcao,
    getAcao,
    deleteAcao,
    updateAcao
}