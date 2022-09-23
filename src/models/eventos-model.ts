import { dbQuery, dbQueryFirst } from "../services/db";
import { Evento } from "../classes-integration/evento";

const insertEvento = async (evento: Evento) => {
    await dbQuery(`INSERT INTO Evento (nome, dataCriacao, horaInicio, horaFim, cepLocal) VALUES (?, ?, ?, ?, ?)`, [evento.nome, evento.dataCriacao, evento.horaInicio, evento.horaFim, evento.cepLocal]);
    let retorno = await dbQuery(`SELECT seq AS Id FROM sqlite_sequence WHERE name = 'Evento' `, []);
    return getEvento(retorno[0].Id);
}

const updateEvento = async (evento: Evento, id: string) => {
    await dbQuery(`UPDATE Evento SET nome = ?, dataCriacao = ?, horaInicio = ?, horaFim = ?, cepLocal = ? WHERE nome = ?`, [evento.nome, evento.dataCriacao, evento.horaInicio, evento.horaFim, evento.cepLocal, id]);
    return getEvento(evento.nome);
}

const listEvento = async () => {
    const retorno =  await dbQuery(`SELECT * FROM Evento`, []);
    return retorno as Evento[];
}

const getEvento = async (nome: string) => {
    const retorno = await dbQueryFirst(`SELECT * FROM Evento WHERE nome = ?`, [nome]);
    return retorno as Evento | undefined;
}

const deleteEvento = async (codigo: string) => {
    await dbQueryFirst(`DELETE FROM Evento WHERE nome = ?`, [codigo]);
}

export const eventoModel = {
    insertEvento,
    listEvento,
    getEvento,
    deleteEvento,
    updateEvento
}