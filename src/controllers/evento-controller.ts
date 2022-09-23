import { ok } from 'assert';
import {Request, Response} from 'express';
import { eventoModel } from '../models/eventos-model';
import { Evento } from '../classes/evento';
import { badRequest, internalServerError, notFound, validateNumber } from '../services/utils';

const insertEvento = (req: Request, res: Response) => {
    {
        const evento = req.body;
        if(!evento)
            return badRequest(res, "Ação Inválida"); 
    }
    const evento = req.body as Evento;
    eventoModel.insertEvento(evento)
        .then(evento => {
            res.json({
                evento
            })
        })
        .catch(err => internalServerError(res, err))
}

const listEvento = (req: Request, res: Response) =>{
    eventoModel.listEvento()
    .then(evento => {
        res.json(evento)
    })
    .catch(err => internalServerError(res, err));
}

const getEvento = (req: Request, res: Response) =>{
    const id = req.params.id;
    {
        if(!id)
            return badRequest(res, 'codigo invalido');
    }
    eventoModel.getEvento(id)
    .then(evento => {
        if(evento)
            res.json(evento);
        else
            return notFound(res);
    })
    .catch(err => internalServerError(res, err));
}


const deleteEvento = async (req: Request, res: Response) =>{
    const id = req.params.id;
    {   
        const eventoSaved = await eventoModel.getEvento(id);
        if(!eventoSaved)
            return notFound(res);
    }
    eventoModel.deleteEvento(id)
    .then(() => res.sendStatus(200))
    .catch(err => internalServerError(res, err));
}

const updateEvento = async (req: Request, res: Response) => {
    const id = req.params.id;
    {
        const evento = req.body;
        if(!evento)
            return badRequest(res, "Ação Inválida");
        
        const eventoSaved = await eventoModel.getEvento(id);
        if(!eventoSaved)
            return notFound(res);
    }
    const evento = req.body as Evento;
    eventoModel.updateEvento(evento, id)
        .then(evento => {
            res.json({
                evento
            })
        })
        .catch(err => internalServerError(res, err))
}

export const eventoController = {
    insertEvento,
    listEvento,
    getEvento,
    deleteEvento,
    updateEvento
}