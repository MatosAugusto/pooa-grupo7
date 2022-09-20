import { ok } from 'assert';
import {Request, Response} from 'express';
import { GrupoAcademicoModel } from '../models/grupo-academico-model';
import { GrupoAcademico } from '../classes/grupoacademico';
import { badRequest, internalServerError, notFound, validateNumber } from '../services/utils';

const insertGrupoAcademico = (req: Request, res: Response) => {
    {
        const gpAcad = req.body;
        //nome, descricao, dataCriacao, statusGrupo, idDepartamento, cpfResponsavel, limiteParticipantes
        if(!gpAcad)
            return badRequest(res, "Grupo Academico Invalido");
        if(!gpAcad.nome)
            return badRequest(res, "Informe o nome do Grupo Academico");
        if(!gpAcad.descricao)
            return badRequest(res, "Informe a descrição do Grupo Academico");  
    }
    const gpAcad = req.body as GrupoAcademico;
    GrupoAcademicoModel.insertGpAcademico(gpAcad)
        .then(gpAcad => {
            res.json({
                gpAcad
            })
        })
        .catch(err => internalServerError(res, err))
}

const listGpAcademico = (req: Request, res: Response) =>{
    GrupoAcademicoModel.listGpAcademico()
    .then(gpAcad => {
        res.json(gpAcad)
    })
    .catch(err => internalServerError(res, err));
}

const getGrupoAcademico = (req: Request, res: Response) =>{
    const id = parseInt(req.params.id);
    {
        if(!id)
            return badRequest(res, 'codigo invalido');
    }
    GrupoAcademicoModel.getGrupoAcademico(id)
    .then(gpAcademico => {
        if(gpAcademico)
            res.json(gpAcademico);
        else
            return notFound(res);
    })
    .catch(err => internalServerError(res, err));
}


const getGrupoAcademicoNome = (req: Request, res: Response) =>{
    const nome = req.params.nome;
    {
        if(!nome)
            return badRequest(res, 'codigo invalido');
    }
    GrupoAcademicoModel.getGrupoAcademicoNome(nome)
    .then(gpAcademico => {
        if(gpAcademico)
            res.json(gpAcademico);
        else
            return notFound(res);
    })
    .catch(err => internalServerError(res, err));
}


const deleteGrupoAcademico = async (req: Request, res: Response) =>{
    const id =  parseInt(req.params.id);
    {   
        const gpAcademicoSaved = await GrupoAcademicoModel.getGrupoAcademico(id);
        if(!gpAcademicoSaved)
            return notFound(res);
    }
    GrupoAcademicoModel.deleteGrupoAcademico(id)
    .then(() => res.sendStatus(200))
    .catch(err => internalServerError(res, err));
}

const updateGrupoAcademico = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    {
        const acao = req.body;
        if(!acao)
            return badRequest(res, "Ação Inválida");
        
        const acaoSaved = await GrupoAcademicoModel.getGrupoAcademico(id);
        if(!acaoSaved)
            return notFound(res);
    }
    const gpAcademico = req.body as GrupoAcademico;
    GrupoAcademicoModel.updateGpAcademico(gpAcademico, id)
        .then(gpAcademico => {
            res.json({
                gpAcademico
            })
        })
        .catch(err => internalServerError(res, err))
}



const ativarGpAcademico = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    {
        const acao = req.body;
        if(!acao)
            return badRequest(res, "Ação Inválida");
        
        const acaoSaved = await GrupoAcademicoModel.getGrupoAcademico(id);
        if(!acaoSaved)
            return notFound(res);
    }
    const gpAcademico = req.body as GrupoAcademico;
    GrupoAcademicoModel.ativarGpAcademico(gpAcademico, id)
        .then(gpAcademico => {
            res.json({
                gpAcademico
            })
        })
        .catch(err => internalServerError(res, err))
}


const desativarGpAcademico = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    {
        const acao = req.body;
        if(!acao)
            return badRequest(res, "Ação Inválida");
        
        const acaoSaved = await GrupoAcademicoModel.getGrupoAcademico(id);
        if(!acaoSaved)
            return notFound(res);
    }
    const gpAcademico = req.body as GrupoAcademico;
    GrupoAcademicoModel.desativarGpAcademico(gpAcademico, id)
        .then(gpAcademico => {
            res.json({
                gpAcademico
            })
        })
        .catch(err => internalServerError(res, err))
}

const trocarResponsavelGpAcademico = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    {
        const acao = req.body;
        if(!acao)
            return badRequest(res, "Ação Inválida");
        
        const acaoSaved = await GrupoAcademicoModel.getGrupoAcademico(id);
        if(!acaoSaved)
            return notFound(res);
    }
    const gpAcademico = req.body as GrupoAcademico;
    GrupoAcademicoModel.trocarResponsavelGpAcademico(gpAcademico, id)
        .then(gpAcademico => {
            res.json({
                gpAcademico
            })
        })
        .catch(err => internalServerError(res, err))
}

export const gpAcadController = {
    insertGrupoAcademico,
    listGpAcademico,
    getGrupoAcademico,
    deleteGrupoAcademico,
    updateGrupoAcademico,
    ativarGpAcademico,
    desativarGpAcademico,
    trocarResponsavelGpAcademico,
    getGrupoAcademicoNome
}